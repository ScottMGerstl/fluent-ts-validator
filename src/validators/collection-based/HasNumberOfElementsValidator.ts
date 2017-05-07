import {PropertyValidator} from "../PropertyValidator";
import {SizedIterable} from "../../shared/SizedIterable";
import {hasLength} from "../../shared/HasLength";
import {hasSize} from "../../shared/HasSize";

export class HasNumberOfElementsValidator implements PropertyValidator<Iterable<any>> {

    constructor(private numberOfElements: number) {
    }

    isValid(input: Iterable<any>): boolean {
        if (hasLength(input)) {
            return input.length === this.numberOfElements;
        } else if (hasSize(input)) {
            return input.size === this.numberOfElements;
        } else {
            return false;
        }
    }
}
