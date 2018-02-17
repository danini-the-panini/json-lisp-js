# JSON Lisp

Execute lisp-like s-expressions written in JSON.

The aim of JSON-Lisp is to allow for an executable code format that is simple and portable, as well as easy to parse and execute in a controlled, sandboxed environment. This allows it to be stored in a database, sent over an HTTP connection, collected from user input, and executed on either a client or a server's machine.

## Installation

Install with npm

    $ npm install --save json-lisp

or yarn

    $ yarn add json-lisp

## Usage

```javascript
const constants = {
  "a": 5,
  "b": 7,
  "+": (a, b) => a + b,
  "-": (a, b) => a - b
};

const jsonLispEnv = new JSONLispEnv(constants);

jsonLispEnv.evaluate(["+", "a", "b"])           //=> 12
jsonLispEnv.evaluate(["-", "a", 3])             //=> 2
jsonLispEnv.evaluate(["+", 2, "b"])             //=> 9
jsonLispEnv.evaluate(["+", "a", ["-", "b", 2]]) //=> 10

jsonLispEnv.evaluateJSON('["+", "a", ["-", "b", 2]]') //=> 10
```

## See Also

1. [JSON::Lisp gem for Ruby](https://github.com/jellymann/json-lisp-ruby)

## Development

After checking out the repo, run `npm install` (or `yarn`) to install dependencies. Then, run `npm test` (or `yarn test`) to run the tests.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/jellymann/json-lisp-js.

## License

The gem is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
