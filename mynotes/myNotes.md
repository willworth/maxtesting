https://www.udemy.com/course/javascript-unit-testing-the-practical-guide/learn/lecture/31877860#overview


Pattern you should follow is arrange act assert.

You want to look for functions which aren't calling other functions - these are our basic units for first tests

## in source testing
is having the tests in the same file as the code

## make the imports unnecessary
```
"scripts": {
    "test": "vitest --run --reporter verbose",
    "test:watch": "vitest",
    "start": "http-server -c-1"
  },

  "scripts": {
    "test": "vitest --run --reporter verbose --globals",
    "test:watch": "vitest",
    "start": "http-server -c-1"
  }

```
if you manually import you get better autocompletion.

test and it are synonyms. same in jest

if you use native es modules without a bundler or transpiler, then in your main code, you have to use the file extension.  math.js not just import x from math.