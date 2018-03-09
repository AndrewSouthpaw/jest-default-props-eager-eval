# jest-default-props-eager-eval

`defaultProps` in React seem to be eagerly evaluated, even if the component is not used.

I'm testing component `Foo`, which renders a `Button`. I imported this `Button` through an `index.js` file that contains both `Button` and `Date`.

In my test for `Foo`, I mock `moment` to return a function, expecting the usual invocation of `moment()`. However, in `Date`, it uses moment differently: `moment.utc()`. *This shouldn't matter*, except that it's being used inside defaultProps, which appears to evaluate when Date gets roped into the testing environment. See the error stack trace:

```
  ● Test suite failed to run

    TypeError: _moment2.default.utc is not a function
      
      at Object.<anonymous> (src/module_a/date.jsx:50:31)
      at Object.<anonymous> (src/module_a/index.js:10:13)
      at Object.<anonymous> (src/module_b/foo.jsx:18:17)
      at Object.<anonymous> (src/module_b/__tests__/foo.test.jsx:18:12)
```

With the default props in `Date` commented out, the test runs fine.
