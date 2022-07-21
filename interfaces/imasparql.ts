interface Value {
  value: string;
}

export interface Binding {
  class: Value;
  count: Value;
  label?: Value;
}

export interface ImasparqlResponse {
  results: {
    bindings: Binding[];
  };
}
