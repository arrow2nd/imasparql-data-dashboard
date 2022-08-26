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
    ["Idol", "user"],
    ["Idol_1st", "history"],
    ["Staff", "briefcase"],
    ["XenoglossiaIdol", "user"],
    ["XenoglossiaCharacter", "user-plus"],
    ["Unit", "users"],
    ["Event", "calendar-event"],
    ["Facility", "building-community"],
    ["Production", "building"],
    ["CinderellaRankingResult", "trophy"],
    ["CinderellaVoiceIdolAudition", "microphone-2"],
    ["CinderellaDreamUnitResult", "wand"],
    ["Live", "device-speaker"],
    ["SetlistNumber", "playlist"],
    ["ScriptText", "message-circle"],
    ["Communication", "book-2"],
    ["CallName", "messages"],
    ["Introduction", "id"],
    ["Clothes", "hanger"],
    ["MusicRecording", "music"],
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
  return json.results.bindings.map((e): CardDetail => ({
    title: getLabel(e),
    count: e.count.value,
    icon: getIcon(e.class.value),
  }));
}
