// 提出する基の日報の内容を取得
function molding1(range_value1) {
  const mold1 = molding(range_value1);
  return mold1;
}

// サンプル日報の内容を取得 + 
function molding2(range_value2, contents_nippou) {
  const mold2 = molding(range_value2);
  const complete_nippou = mold2.replace('■当日実施した作業、打合せ',contents_nippou);
  // console.log(complete_nippou + '確かめログ＝＝＝＝完成形の日報！！！');
  return complete_nippou;
}

// スプレッドシート読み込み→範囲選択→配列を文字列変換→置き換えまで　※molding=成形
function molding(range_value0) {

  // スプレッドシート読み込み
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  // 取り込む範囲指定
  const range = spreadsheet.getRange(range_value0);
  // 内容の取り込み
  const contents = range.getValues();
  // 配列→文字列
  const string_contents = contents.join(',');
  // 置き換え変数
  const replaceWord_1 = /\,/g;
  const replaceWord_2 = /\**/g;
  const replaceWord_3 = /→/g;
  const replaceWord_4 = /-/g;
  const replaceWord_5 = /https/g;
  const replaceWord_6 = /#ERROR!/g;
  // 置き換え後変数に代入
  const replace_contents = string_contents.replace(replaceWord_1,'\n')
    .replace(replaceWord_2,'')
    .replace(replaceWord_3,'　→')
    .replace(replaceWord_4,'　-')
    .replace(replaceWord_5, '　https')
    .replace(replaceWord_6,'=======================================');

  return replace_contents;

}

