import {PropertyValidator} from "../PropertyValidator";
import {hasLength} from "../../shared/HasLength";
import {hasSize} from "../../shared/HasSize";

export class IsNotEmptyValidator implements PropertyValidator<Iterable<any>> {

    isValid(input: Iterable<any> | undefined): boolean {
        if (hasLength(input)) {
            return input.length > 0;
        } else if (hasSize(input)) {
            return input.size > 0;
        } else {
            return false;
        }
    }
}
