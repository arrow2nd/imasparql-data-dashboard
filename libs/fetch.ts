import { createCardDetails } from "./create.ts";

import { CardDetail } from "@interfaces/card.ts";
import { ImasparqlResponse } from "@interfaces/imasparql.ts";

const endpointUrl = "https://sparql.crssnky.xyz/spql/imas/query";

const query = `PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX schema: <http://schema.org/>
PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>

SELECT (IF(CONTAINS(STR(?o), "#"), STRAFTER(str(?o), "#"), STRAFTER(STR(?o), STR(schema:))) AS ?class) ?label (COUNT(DISTINCT ?s) AS ?count)
WHERE {
  ?s rdf:type ?o.
  FILTER(?o NOT IN (rdf:Property, rdfs:Class, owl:Ontology))
  OPTIONAL { ?o rdfs:label ?label }
}
GROUP BY ?o ?label
ORDER BY DESC (?count)`;

/**
 * カードに表示するデータを取得
 * @returns カードに表示するデータの配列
 */
export async function fetchCardDetails(): Promise<CardDetail[] | undefined> {
  const url = new URL(endpointUrl);
  url.searchParams.append("query", query);

  // 5秒でタイムアウト
  const ctrl = new AbortController();
  const id = setTimeout(() => ctrl.abort(), 5000);

  try {
    const res = await fetch(url.toString(), { signal: ctrl.signal });
    if (!res.ok) {
      return;
    }

    clearTimeout(id);

    const json: ImasparqlResponse = await res.json();
    return createCardDetails(json);
  } catch (err) {
    console.error(err);
    return;
  }
}
