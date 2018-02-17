export default class JSONLispEnv {
  constructor(constants) {
    this.constants = Object.freeze({ ...constants });
  }

  evaluate(expression) {
    if (Array.isArray(expression)) {
      const fn = this.constants[expression[0]];
      const params = expression.slice(1).map(x => this.evaluate(x))
      return fn(...params);
    } else if (typeof expression === 'string') {
      return this.constants[expression];
    }
    return expression;
  }

  evaluateJSON(jsonString) {
    return this.evaluate(JSON.parse(jsonString));
  }
}