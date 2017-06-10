import {PropertyValidator} from "../PropertyValidator";
import * as validatorJS from "validator";

export class IsNumericStringValidator implements PropertyValidator<string> {

    isValid(input: string | undefined): boolean {
        if (input) {
            return validatorJS.isNumeric(input);
        }
        return false;
    }
}
