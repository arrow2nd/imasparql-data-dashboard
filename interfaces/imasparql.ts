interface Value {
  value: string;
}

interface Binding {
  class: Value;
  count: Value;
  label?: Value;
}

export interface ImasparqlResponse {
  results: {
    bindings: Binding[];
  };
}
