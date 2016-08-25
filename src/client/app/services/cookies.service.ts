/* tslint:disable */
import { Injectable, Optional } from '@angular/core';
import { Json, isPresent, isBlank, isString } from '@angular/common/src/facade/lang';

/**
 * STOLEN FROM HERE:
 * https://github.com/salemdar/angular2-cookie
 */

/**
 * @name CookieOptionsArgs
 * @description
 *
 * Object containing default options to pass when setting cookies.
 *
 * The object may have following properties:
 *
 * - **path** - {string} - The cookie will be available only for this path and its
 *   sub-paths. By default, this is the URL that appears in your `<base>` tag.
 * - **domain** - {string} - The cookie will be available only for this domain and
 *   its sub-domains. For security reasons the user agent will not accept the cookie
 *   if the current domain is not a sub-domain of this domain or equal to it.
 * - **expires** - {string|Date} - String of the form "Wdy, DD Mon YYYY HH:MM:SS GMT"
 *   or a Date object indicating the exact date/time this cookie will expire.
 * - **secure** - {boolean} - If `true`, then the cookie will only be available through a
 *   secured connection.
 */
export interface CookieOptionsArgs {
    path?: string;
    domain?: string;
    expires?: string | Date;
    secure?: boolean;
}

/** @private */
export class CookieOptions {
    path: string;
    domain: string;
    expires: string | Date;
    secure: boolean;

    constructor({path, domain, expires, secure}: CookieOptionsArgs) {
        this.path = isPresent(path) ? path : null;
        this.domain = isPresent(domain) ? domain : null;
        this.expires = isPresent(expires) ? expires : null;
        this.secure = isPresent(secure) ? secure : false;
    }

    merge(options?: CookieOptionsArgs): CookieOptions {
        return new CookieOptions(<CookieOptionsArgs>{
            path: isPresent(options) && isPresent(options.path) ? options.path : this.path,
            domain: isPresent(options) && isPresent(options.domain) ? options.domain : this.domain,
            expires: isPresent(options) && isPresent(options.expires) ? options.expires : this.expires,
            secure: isPresent(options) && isPresent(options.secure) ? options.secure : this.secure
        });
    }
}

/** @private */
@Injectable()
export class BaseCookieOptions extends CookieOptions {
    constructor() {
        super(<CookieOptionsArgs>{path: '/'});
    }
}

@Injectable()
export class CookieService {
    constructor(@Optional() private _defaultOptions: CookieOptions) {}

    /**
     * @name cookieService#get
     *
     * @description
     * Returns the value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {string} Raw cookie value.
     */
    get(key: string): string { return (<any>this._cookieReader())[key]; }

    /**
     * @name cookieService#getObject
     *
     * @description
     * Returns the deserialized value of given cookie key.
     *
     * @param {string} key Id to use for lookup.
     * @returns {Object} Deserialized cookie value.
     */
    getObject(key: string): Object {
        let value = this.get(key);
        return value ? Json.parse(value) : value;
    }

    /**
     * @name cookieService#getAll
     *
     * @description
     * Returns a key value object with all the cookies.
     *
     * @returns {Object} All cookies
     */
    getAll(): Object { return <any>this._cookieReader(); }

    /**
     * @name cookieService#put
     *
     * @description
     * Sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {string} value Raw value to be stored.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    put(key: string, value: string, options?: CookieOptionsArgs) {
        this._cookieWriter()(key, value, options);
    }

    /**
     * @name cookieService#putObject
     *
     * @description
     * Serializes and sets a value for given cookie key.
     *
     * @param {string} key Id for the `value`.
     * @param {Object} value Value to be stored.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    putObject(key: string, value: Object, options?: CookieOptionsArgs) {
        this.put(key, Json.stringify(value), options);
    }

    /**
     * @name cookieService#remove
     *
     * @description
     * Remove given cookie.
     *
     * @param {string} key Id of the key-value pair to delete.
     * @param {CookieOptionsArgs} options (Optional) Options object.
     */
    remove(key: string, options?: CookieOptionsArgs): void {
        this._cookieWriter()(key, undefined, options);
    }

    /**
     * @name cookieService#removeAll
     *
     * @description
     * Remove all cookies.
     */
    removeAll(): void {
        let cookies = this.getAll();
        Object.keys(cookies).forEach(key => { this.remove(key); });
    }

    private _cookieReader(): Object {
        let rawDocument = document;
        let lastCookies = {};
        let lastCookieString = '';
        let that = this;

        let cookieArray: string[], cookie: string, i: number, index: number, name: string;
        let currentCookieString = rawDocument.cookie || '';
        if (currentCookieString !== lastCookieString) {
            lastCookieString = currentCookieString;
            cookieArray = lastCookieString.split('; ');
            lastCookies = {};

            for (i = 0; i < cookieArray.length; i++) {
                cookie = cookieArray[i];
                index = cookie.indexOf('=');
                if (index > 0) {  // ignore nameless cookies
                    name = that._safeDecodeURIComponent(cookie.substring(0, index));
                    // the first value that is seen for a cookie is the most
                    // specific one.  values for the same cookie name that
                    // follow are for less specific paths.
                    if (isBlank((<any>lastCookies)[name])) {
                        (<any>lastCookies)[name] = that._safeDecodeURIComponent(cookie.substring(index + 1));
                    }
                }
            }
        }
        return lastCookies;
    }

    private _cookieWriter() {
        let that = this;
        let rawDocument = document;

        return function(name: string, value: string, options?: CookieOptionsArgs) {
            rawDocument.cookie = that._buildCookieString(name, value, options);
        };
    }

    private _safeDecodeURIComponent(str: string) {
        try {
            return decodeURIComponent(str);
        } catch (e) {
            return str;
        }
    }

    private _buildCookieString(name: string, value: string, options?: CookieOptionsArgs): string {
        let cookiePath = '/';
        let path: string, expires: any;
        let defaultOpts =
            this._defaultOptions || new CookieOptions(<CookieOptionsArgs>{path: cookiePath});
        let opts: CookieOptions = this._mergeOptions(defaultOpts, options);
        expires = opts.expires;
        if (isBlank(value)) {
            expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
            value = '';
        }
        if (isString(expires)) {
            expires = new Date(expires);
        }

        let str = encodeURIComponent(name) + '=' + encodeURIComponent(value);
        str += opts.path ? ';path=' + opts.path : '';
        str += opts.domain ? ';domain=' + opts.domain : '';
        str += expires ? ';expires=' + expires.toUTCString() : '';
        str += opts.secure ? ';secure' : '';

        // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
        // - 300 cookies
        // - 20 cookies per unique domain
        // - 4096 bytes per cookie
        let cookieLength = str.length + 1;
        if (cookieLength > 4096) {
            console.log(`Cookie \'${name}\' possibly not set or overflowed because it was too large (${cookieLength} >
                4096 bytes)!`);
        }

        return str;
    }

    private _mergeOptions(defaultOpts: BaseCookieOptions,
                          providedOpts?: CookieOptionsArgs): CookieOptions {
        let newOpts = defaultOpts;
        if (isPresent(providedOpts)) {
            return newOpts.merge(new CookieOptions(providedOpts));
        }
        return newOpts;
    }
}
/* tslint:enable */
