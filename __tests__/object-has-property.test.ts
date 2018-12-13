import { objectHasProperty } from "../src/util/object-has-property";

describe('objectHasProperty', () => {
    let testObject = {};
    beforeAll(() => {
        testObject = {
            firstProperty: 'firstValue',
            secondProperty: 'secondValue',
        }
    });
    test('should be truthy when an object has the property', () => {
        expect(objectHasProperty(testObject, 'firstProperty')).toBeTruthy();
    });
    test('should be falsy when an object has not the property', () => {
        expect(objectHasProperty(testObject, 'thirdProperty')).toBeFalsy();
    });
    test('should throw error when the first parameter is function', () => {
        expect(() => objectHasProperty(() => {}, 'firstProperty'))
            .toThrow('The first parameter is not object. Instead of an object the first parameter is of type: function')
    });
    test('should throw error when the first parameter is null', () => {
        expect(() => objectHasProperty(null, 'firstProperty'))
            .toThrow('The first parameter is not object. Instead of an object the first parameter is of type: null')
    });
    test('should throw error when the first parameter is undefined', () => {
        expect(() => objectHasProperty(undefined, 'firstProperty'))
            .toThrow('The first parameter is not object. Instead of an object the first parameter is of type: undefined')
    });
});