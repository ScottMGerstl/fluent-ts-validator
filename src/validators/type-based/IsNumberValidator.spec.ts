import {IsNumberValidator} from "./IsNumberValidator";

describe("IsNumberValidator", () => {
    describe("isValid()", () => {
        let isNumberValidator: IsNumberValidator;

        beforeEach(() => {
            isNumberValidator = new IsNumberValidator();
        });

        it("should return true if given value is instance of Number", () => {
            let input = new Number(42);

            let result = isNumberValidator.isValid(input);

            expect(result).toBeTruthy();
        });

        it("should return true if given value is of type number", () => {
            let result = isNumberValidator.isValid(42);

            expect(result).toBeTruthy();
        });

        it("should return false if given value is undefined", () => {
            let result = isNumberValidator.isValid(undefined);

            expect(result).toBeFalsy();
        });

        it("should return false if given value is not of type number", () => {
            let result = isNumberValidator.isValid("42");

            expect(result).toBeFalsy();
        });
    });
});
