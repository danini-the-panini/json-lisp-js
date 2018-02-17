import test from 'ava';
import JSONLispEnv from '.';

test('evaluate', t => {
  const constants = {
    "a": 5,
    "b": 7,
    "+": (a, b) => a + b,
    "-": (a, b) => a - b
  };

  const jsonLispEnv = new JSONLispEnv(constants);

  t.is(jsonLispEnv.evaluate(42), 42);
  t.is(jsonLispEnv.evaluate("a"), 5);
  t.is(jsonLispEnv.evaluate("b"), 7);
  
  t.is(jsonLispEnv.evaluate(["+", "a", "b"]), 12);
  t.is(jsonLispEnv.evaluate(["-", "b", "a"]), 2);
  t.is(jsonLispEnv.evaluate(["-", "a", 2]), 3);
  t.is(jsonLispEnv.evaluate(["+", 2, "b"]), 9);

  t.is(jsonLispEnv.evaluate(["+", "a", ["+", 2, "b"]]), 14);
  t.is(jsonLispEnv.evaluate(["+", "a", ["-", "b", 2]]), 10);
});

test('evaluate_json', t => {
  const constants = {
    "a": 5,
    "b": 7,
    "+": (a, b) => a + b
  };

  const jsonLispEnv = new JSONLispEnv(constants);

  t.is(jsonLispEnv.evaluateJSON('42'), 42);
  t.is(jsonLispEnv.evaluateJSON('"a"'), 5);
  t.is(jsonLispEnv.evaluateJSON('["+", "a", "b"]'), 12);
});