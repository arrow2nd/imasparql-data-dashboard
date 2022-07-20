type Value = {
  value: string;
};

type Binding = {
  class: Value;
  count: Value;
  label?: Value;
};

export type ImasparqlResponse = {
  results: {
    bindings: Binding[];
  };
};
