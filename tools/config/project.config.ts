import { join } from 'path';
import { SeedAdvancedConfig } from './seed-advanced.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedAdvancedConfig {

    PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

    /**
     * The destination of the fonts
     * @type {string}
     */
    FONTS_DEST = `${this.APP_DEST}/assets/fonts`;

    /**
     * The src for our fonts
     */
    FONTS_SRC = 'node_modules/font-awesome/fonts/**';

    constructor() {
        super();
        this.APP_TITLE = 'LifeSite';

        /* Enable typeless compiler runs (faster) between typed compiler runs. */
        // this.TYPED_COMPILE_INTERVAL = 5;

        // Add `NPM` third-party libraries to be injected/bundled.
        this.NPM_DEPENDENCIES = [
            ...this.NPM_DEPENDENCIES,
            {src: `font-awesome/css/font-awesome.min.css`, inject: true},
            {src: `normalize.css/normalize.css`, inject: true, vendor: true},
            {src: `reset-css/reset.css`, inject: true, vendor: true}
            // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
        ];

        // Add `local` third-party libraries to be injected/bundled.
        this.APP_ASSETS = [
            ...this.APP_ASSETS
            // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
            // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
        ];

        this.SYSTEM_CONFIG['packages'] = Object.assign({}, this.SYSTEM_CONFIG['packages'], {
            'frameworks': {
                defaultExtension: 'js',
                main: 'index.js'
            },
            'elements': {
                defaultExtension: 'js',
                main: 'index.js'
            },
            'core': {
                defaultExtension: 'js',
                main: 'index.js'
            },
            'models': {
                defaultExtension: 'js',
                main: 'index.js'
            },
            'pages': {
                defaultExtension: 'js',
                main: 'index.js'
            },
            'schemas': {
                defaultExtension: 'js',
                main: 'index.js'
            },
            'services': {
                defaultExtension: 'js',
                main: 'index.js'
            },
            'reactive': {
                defaultExtension: 'js',
                main: 'index.js'
            },
            'utility': {
                defaultExtension: 'js',
                main: 'index.js'
            },
            '@ngrx/effects': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@ngrx/store-devtools': {
                main: 'index.js',
                defaultExtension: 'js'
            },
            '@ngrx/store-log-monitor': {
                main: 'index.js',
                defaultExtension: 'js'
            }
        });

        this.SYSTEM_CONFIG['paths'] = Object.assign({}, this.SYSTEM_CONFIG['paths'], {
            'frameworks': `app/frameworks`,
            'elements': `app/elements`,
            'core': `app/core`,
            'models': `app/models`,
            'pages': `app/pages`,
            'schemas': `app/schemas`,
            'services': `app/services`,
            'reactive': `app/reactive`,
            'utility': `app/utility`
        });

        this.SYSTEM_BUILDER_CONFIG['packages'] = this.SYSTEM_CONFIG['packages'];
        this.SYSTEM_BUILDER_CONFIG['paths'] = Object.assign({}, {
            'frameworks': `dist/tmp/app/frameworks`,
            'elements': `dist/tmp/app/elements`,
            'core': `dist/tmp/app/core`,
            'models': `dist/tmp/app/models`,
            'pages': `dist/tmp/app/pages`,
            'schemas': `dist/tmp/app/schemas`,
            'services': `dist/tmp/app/services`,
            'reactive': `dist/tmp/app/reactive`,
            'utility': `dist/tmp/app/utility`
        }, this.SYSTEM_BUILDER_CONFIG['paths']);

        /* Add to or override NPM module configurations: */
        // this.mergeObject(this.PLUGIN_CONFIGS['browser-sync'], { ghostMode: false });
    }

}
