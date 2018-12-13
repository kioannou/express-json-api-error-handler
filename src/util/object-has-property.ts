export function objectHasProperty(obj: any, property: string): boolean {
  if (typeof obj == 'object' && obj !== null) {
    return Object.prototype.hasOwnProperty.call(obj, property);
  } else if (obj === null) {
    throw new Error(
      `The first parameter is not object. ` + `Instead of an object the first parameter is of type: null`,
    );
  } else {
    throw new Error(
      `The first parameter is not object. ` + `Instead of an object the first parameter is of type: ${typeof obj}`,
    );
  }
}
