This repository showcases a bug in the `jest` caching. I'm not sure if it's related to `ts-jest` but coudln't come up with a pure JS example.

## What's the bug?
Jest (in watch mode) erroneously "remembers" that a test suite passed.

## How to reproduce
1. Run the tests with `yarn test:watch` (or `npm run test:watch`) (if necessary press `a` to run all tests)
2. Notice that they fail with `Type 'boolean' is not assignable to type 'string'.`
3. Open `src/page.ts` and save it without changing anything
4. Notice that the tests ran again and this time they passed
5. Exit the watch task
6. Inspect `src/page.spec.ts` and notice that there is a type error in line 18
7. Run `yarn test` (or `npm test`) and see that the tests still pass

### Additional information
Removing the `jest` cache with `yarn jest:clear` (or `npm run jest:clear`) anywhere after step 4 will "fix" the bug.