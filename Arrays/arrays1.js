// 4*4 = 16 bytes of storage
const strings = ["a", "b", "c", "d"];
//                0    1    2    3

// lookup - O(1)
strings[2]; // c

// push - O(1)
strings.push("e");
strings.push("f");

// pop - O(1)
strings.pop(); // 'f'

// unshift - O(n)
strings.unshift("x"); //  ['x', 'a', 'b', 'c', 'd']

// splice - O(n)
strings.splice(2, 0, "alien");
