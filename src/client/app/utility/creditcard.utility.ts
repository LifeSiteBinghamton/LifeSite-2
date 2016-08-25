
export class CreditCardUtility {

    public static validateCreditCard(ccnumber) {
        if (!ccnumber || ccnumber.length < 14) {
            return {
                type: null,
                valid: true
            };
        }

        let len = ccnumber.length;
        let mul = 0;
        let valid;
        let prodArr = [
            [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
            [0, 2, 4, 6, 8, 1, 3, 5, 7, 9]
        ];
        let sum = 0;

        while (len--) {
            sum += prodArr[mul][parseInt(ccnumber.charAt(len), 10)];
            mul ^= 1;
        }

        valid = sum % 10 === 0 && sum > 0;

        ccnumber = ccnumber.toString().replace(/\s+/g, '');

        return {
            type: CreditCardUtility.getCardType(ccnumber),
            valid: valid
        };
    }

    public static getCardType(ccnumber) {
        return CreditCardUtility.isVisa(ccnumber) ? 'visa' :
            CreditCardUtility.isMasterCard(ccnumber) ? 'mastercard' :
                CreditCardUtility.isAmericanExpress(ccnumber) ? 'american_express' :
                    CreditCardUtility.isDiscover(ccnumber) ? 'discover' :
                        CreditCardUtility.isDinersClub(ccnumber) ? 'diners_club' :
                            CreditCardUtility.isJCB(ccnumber) ? 'jcb' : null;
    }

    public static getCardImage(cardType) {
        return (cardType === 'visa') ? 'assets/img/creditcards/visa.png' :
            (cardType === 'mastercard') ? 'assets/img/creditcards/mastercard.png' :
                (cardType === 'american_express') ? 'assets/img/creditcards/amex.png' :
                    (cardType === 'discover') ? 'assets/img/creditcards/discover.png' :
                        (cardType === 'diners_club') ? 'assets/img/creditcards/diners.png' :
                            (cardType === 'jcb') ? 'assets/img/creditcards/jcb.png' : null;
    }

    private static isAmericanExpress(ccnumber) {
        return /^(34)|^(37)/.test(ccnumber);
    }

    private static isDinersClub(ccnumber) {
        return /^30[0-5]/.test(ccnumber) || /^(2014)|^(2149)/.test(ccnumber) || /^36/.test(ccnumber);
    }

    private static isDiscover(ccnumber) {
        return /^(6011)|^(622(1(2[6-9]|[3-9][0-9])|[2-8][0-9]{2}|9([01][0-9]|2[0-5])))|^(64[4-9])|^65/
            .test(ccnumber);
    }

    private static isJCB(ccnumber) {
        return /^35(2[89]|[3-8][0-9])/.test(ccnumber);
    }

    private static isMasterCard(ccnumber) {
        return /^5[1-5]/.test(ccnumber);
    }

    private static isVisa(ccnumber) {
        return /^4/.test(ccnumber);
    }
}
