// ��o�����̓���̓��e���擾
function molding1(range_value1) {
  const mold1 = molding(range_value1);
  return mold1;
}

// �T���v������̓��e���擾 + 
function molding2(range_value2, contents_nippou) {
  const mold2 = molding(range_value2);
  const complete_nippou = mold2.replace('���������{������ƁA�ō���',contents_nippou);
  // console.log(complete_nippou + '�m���߃��O�������������`�̓���I�I�I');
  return complete_nippou;
}

// �X�v���b�h�V�[�g�ǂݍ��݁��͈͑I�����z��𕶎���ϊ����u�������܂Ł@��molding=���`
function molding(range_value0) {

  // �X�v���b�h�V�[�g�ǂݍ���
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  // ��荞�ޔ͈͎w��
  const range = spreadsheet.getRange(range_value0);
  // ���e�̎�荞��
  const contents = range.getValues();
  // �z�񁨕�����
  const string_contents = contents.join(',');
  // �u�������ϐ�
  const replaceWord_1 = /\,/g;
  const replaceWord_2 = /\**/g;
  const replaceWord_3 = /��/g;
  const replaceWord_4 = /-/g;
  const replaceWord_5 = /https/g;
  const replaceWord_6 = /#ERROR!/g;
  // �u��������ϐ��ɑ��
  const replace_contents = string_contents.replace(replaceWord_1,'\n')
    .replace(replaceWord_2,'')
    .replace(replaceWord_3,'�@��')
    .replace(replaceWord_4,'�@-')
    .replace(replaceWord_5, '�@https')
    .replace(replaceWord_6,'=======================================');

  return replace_contents;

}

