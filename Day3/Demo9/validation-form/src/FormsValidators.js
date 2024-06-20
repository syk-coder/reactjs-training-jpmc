import validator from 'validator';

export default class FormValidator {
    constructor(validtns) {
        this.validations = validtns
        //console.log(validtns);
    }

    validate(state) {
        let validation = this.ValidationInit();

        this.validations.forEach(v => {
            if (!validation[v.field].isInvalid) {
                const value = state[v.field].toString();
                const args = v.args || [];

                const method = typeof v.method === 'string' ? validator[v.method] : v.method;

                if (method(value, ...args, state) !== v.validWhen) {
                    validation[v.field] = { isInvalid: true, message: v.message }
                    validation.isValid = false;
                }
            }
        });
        return validation;
    }

    ValidationInit() {
        const validation = {};

        this.validations.map(v => {
            return validation[v.field] = { isInvalid: false, message: '' }
        });

        return { isValid: true, ...validation };
    }

}