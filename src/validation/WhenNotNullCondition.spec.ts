import {WhenNotNullCondition} from "./WhenNotNullCondition";

describe("WhenNotNullCondition", () => {
    let condition: WhenNotNullCondition<TestClass>;
    let testObject: TestClass;

    beforeEach(() => {
        condition = new WhenNotNullCondition((t: TestClass) => t.property);
        testObject = new TestClass();
    });

    describe("shouldDoValidation()", () => {
        it("should return true if property has a value", () => {
            testObject.property = "foo";

            const result = condition.shouldDoValidation(testObject);

            expect(result).toBe(true);
        });

        it("should return true if property has an empty value", () => {
            testObject.property = "";

            const result = condition.shouldDoValidation(testObject);

            expect(result).toBe(true);
        });

        it("should return false if property has a null value", () => {
            testObject.property = null;

            const result = condition.shouldDoValidation(testObject);

            expect(result).toBe(false);
        });

        it("should return false if property is undefined", () => {
            const result = condition.shouldDoValidation(testObject);

            expect(result).toBe(false);
        });

        it("should return false if exception occurs during lambda expression invokation", () => {
            // @ts-ignore exception desired
            condition = new WhenNotNullCondition((t: TestClass) => t.innerProp.property);

            const result = condition.shouldDoValidation(testObject);

            expect(result).toBe(false);
        });
    });
});

class TestClass {
    property?: string | null;
    innerProp?: InnerClass;
}

class InnerClass {
    property?: string;
}
