const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([3, 'world', 'lighthouse'], ['hello', 'world', 'lighthouse']); // => should NOT pass

assertArraysEqual(['hello', 'world', 'lighthouse'], ['hello', 'world', 'lighthouse']); // => should PASS
