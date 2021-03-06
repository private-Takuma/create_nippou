function main() {

  // 日報の基データ取り込みの準備
    // 最終行取得　※sampleじゃない方の日報の最終行取得
    const lastRow = SpreadsheetApp.getActiveSheet().getLastRow();
    const lastLine = 'E' + lastRow;

  // 日報の基データの取り込み　※sampleじゃない方の日報の取り込み
  const mold = molding1('E1:' + lastLine);
  // 日報(完成形)の成形+取り込み
  const complete_nippou = molding2('K1:K23',mold);

  // ログ確認
    // 日報(完成形)の確認
    console.log(complete_nippou
     + '\n\n################log#################\n####### 上記、完成形の日報です！ #######\n################log#################');

  // 送信するメールの内容の準備類
    // 現在の日にち取得
    const day = new Date();
    const day_jp = Utilities.formatDate(day,'Asia/Tokyo','yyyyMMdd');
    // 宛先とタイトル設定
    const destination = 'aaaaa@gmail.com'
    const subject = '【開発日報】中川拓馬_' + day_jp;

  // 下書きメールの作成
  // GmailApp.createDraft(destination,subject,complete_nippou);
  // メール送信

}

