function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);           // 1
getFirstElement<string>(["a", "b", "c"]);     // "a"
getFirstElement<boolean>([true, false, true]); // true

console.log("First number:", getFirstElement<number>([1, 2, 3]));
console.log("First string:", getFirstElement<string>(["a", "b", "c"]));
console.log("First boolean:", getFirstElement<boolean>([true, false, true]));

// console.log("test:", getFirstElement<number>([1, 2, true]));
