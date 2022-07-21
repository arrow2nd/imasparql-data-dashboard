import { CardDetail } from "@interfaces/card.ts";
import { ImasparqlResponse } from "@interfaces/imasparql.ts";

/**
 * クラス名をラベルに変換
 * @param c クラス名
 * @returns ラベル
 */
function toLabel(c: string): string {
  const altLabels = new Map([
    ["MusicAlbum", "アルバム"],
    ["MusicRelease", "CD"],
    ["MusicComposition", "作詞・作曲家"],
    ["MusicRecording", "楽曲"],
  ]);

  return altLabels.get(c) || "Unknown";
}

/**
 * アイコンを取得
 * @param c クラス名
 * @returns アイコン名
 */
function getIcon(c: string): string {
  const icons = new Map([
    ["CallName", "messages"],
  ]);

  return icons.get(c) || "error-404";
}

/**
 * APIのレスポンスからカードに表示するデータを作成
 * @param json レスポンス
 * @returns カードに表示するデータの配列
 */
export function createCardDetails(json: ImasparqlResponse): CardDetail[] {
  console.log(json);

  const cards = json.results.bindings.map((e): CardDetail => {
    return {
      title: e.label?.value || toLabel(e.class.value),
      count: e.count.value,
      icon: getIcon(e.class.value),
    };
  });

  return cards;
}
