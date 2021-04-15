This repository showcases a bug in the `jest` caching. I'm not sure if it's related to `ts-jest` but coudln't come up with a pure JS example.

## What's the bug?
Jest (in watch mode) erroneously "remembers" that a test suite passed.

## How to reproduce
0. clone this repo: `git clone https://github.com/fischeversenker/ts-jest-error-repro.git && cd ts-jest-error-repro` and install the dependencies with `yarn` or `npm i`
1. Inspect `src/page.spec.ts` and notice that there is a type error in line 18
2. Run the tests with `yarn test:watch` (or `npm run test:watch`) (if necessary press `a` to run all tests)
3. Notice that they fail with `Type 'boolean' is not assignable to type 'string'.` (**<- this is expected**)
4. Open `src/page.ts` and save it without changing anything
5. Notice that the tests ran again and this time they passed (**<- this is unexpected**)
6. Running the tests from now on will yield a false positive result

### Additional information
Removing the `jest` cache with `yarn jest:clear` (or `npm run jest:clear`) anywhere after step 4 will "fix" the bug.