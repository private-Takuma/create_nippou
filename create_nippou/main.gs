function main() {

  // ����̊�f�[�^��荞�݂̏���
    // �ŏI�s�擾�@��sample����Ȃ����̓���̍ŏI�s�擾
    const lastRow = SpreadsheetApp.getActiveSheet().getLastRow();
    const lastLine = 'E' + lastRow;

  // ����̊�f�[�^�̎�荞�݁@��sample����Ȃ����̓���̎�荞��
  const mold = molding1('E1:' + lastLine);
  // ����(�����`)�̐��`+��荞��
  const complete_nippou = molding2('K1:K23',mold);

  // ���O�m�F
    // ����(�����`)�̊m�F
    console.log(complete_nippou
     + '\n\n################log#################\n####### ��L�A�����`�̓���ł��I #######\n################log#################');

  // ���M���郁�[���̓��e�̏�����
    // ���݂̓��ɂ��擾
    const day = new Date();
    const day_jp = Utilities.formatDate(day,'Asia/Tokyo','yyyyMMdd');
    // ����ƃ^�C�g���ݒ�
    const destination = 'aaaaa@gmail.com'
    const subject = '�y�J������z�����n_' + day_jp;

  // ���������[���̍쐬
  // GmailApp.createDraft(destination,subject,complete_nippou);
  // ���[�����M

}

