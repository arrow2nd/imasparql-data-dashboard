import { CardDetail } from "@types/card.ts";
import { ImasparqlResponse } from "@types/imasparql.ts";

const baseUrl = "https://sparql.crssnky.xyz/spql/imas/query";

const query = `PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX schema: <http://schema.org/>
PREFIX imas: <https://sparql.crssnky.xyz/imasrdf/URIs/imas-schema.ttl#>

SELECT (IF(CONTAINS(STR(?o), "#"), STRAFTER(str(?o), "#"), STRAFTER(STR(?o), STR(schema:))) AS ?class) ?label (COUNT(DISTINCT ?s) AS ?count)
WHERE {
  ?s rdf:type ?o.
  FILTER(?o NOT IN (rdf:Property, rdfs:Class, owl:Ontology, imas:Idol_1st, schema:MusicRelease))
  OPTIONAL { ?o rdfs:label ?label }
}
GROUP BY ?o ?label
ORDER BY ?o`;

/**
 * APIのレスポンスからカードに表示するデータを作成
 * @param json レスポンス
 * @returns カードに表示するデータの配列
 */
function createCardDetails(json: ImasparqlResponse): CardDetail[] {
  console.log(json);

  const cards: CardDetail[] = [
    {
      title: "アイドル",
      count: "335",
      icon: "user",
    },
    {
      title: "ユニット",
      count: "1520",
      icon: "users",
    },
    {
      title: "ボイスアイドルオーディション",
      count: "6",
      icon: "microphone-2",
    },
    {
      title: "呼び名",
      count: "5923",
      icon: "messages",
    },
  ];

  return cards;
}

/**
 * カードに表示するデータを取得
 * @returns カードに表示するデータの配列
 */
export async function fetchCardDetails(): Promise<CardDetail[]> {
  const url = new URL(baseUrl);
  url.searchParams.append("query", query);

  const res = await fetch(url.toString());
  const json: ImasparqlResponse = await res.json();

  return createCardDetails(json);
}
