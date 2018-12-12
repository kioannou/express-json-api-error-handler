import { Example } from "../src/example";

test('My Greeter', () => {
    expect(Example.hi('Kostas')).toEqual('Hi Kostas');
});