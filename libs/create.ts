import { CardDetail } from "@interfaces/card.ts";
import { Binding, ImasparqlResponse } from "@interfaces/imasparql.ts";

/**
 * ラベルを取得
 * @param b データ
 * @returns ラベル
 */
function getLabel(b: Binding): string {
  if (b.label) {
    return b.label.value;
  }

  const altLabels = new Map([
    ["MusicAlbum", "アルバム"],
    ["MusicRelease", "CD"],
    ["MusicComposition", "作詞・作曲家"],
    ["MusicRecording", "楽曲"],
  ]);

  return altLabels.get(b.class.value) || "不明なデータ";
}

/**
 * アイコンを取得
 * @param c クラス名
 * @returns アイコン名
 */
function getIcon(c: string): string {
  const icons = new Map([
    ["CallName", "messages"],
    ["ScriptText", "message-circle"],
    ["Unit", "users"],
    ["SetlistNumber", "playlist"],
    ["Clothes", "hanger"],
    ["CinderellaRankingResult", "trophy"],
    ["Introduction", "id"],
    ["Idol", "user"],
    ["Communication", "book-2"],
    ["Live", "device-speaker"],
    ["Event", "calendar-event"],
    ["Staff", "briefcase"],
    ["Idol_1st", "history"],
    ["Facility", "building-community"],
    ["MusicRecording", "music"],
    ["Production", "building"],
    ["CinderellaVoiceIdolAudition", "microphone-2"],
    ["MusicComposition", "writing"],
    ["MusicAlbum", "disc"],
    ["MusicRelease", "disc"],
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

  const cards = json.results.bindings.map((e): CardDetail => ({
    title: getLabel(e),
    count: e.count.value,
    icon: getIcon(e.class.value),
  }));

  return cards;
}
