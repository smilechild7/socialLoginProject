// 여러 모듈에서 공통으로 사용하는 기능이나 변수를 정의하는 곳입니다. 예를 들어, 날짜 형식화, 에러 처리 로직 등을 포함할 수 있습니다.

'use strict';
import moment from 'moment-timezone';

function resSend(res, data) {
  if (data.error) { timeLog('    error=' + JSON.stringify(data.error)) }
  res.send(data)
  timeLog('    ==> res=' + JSON.stringify(data))
}

function consoleBar() {
// 콘솔에 구분선 출력
  console.log('-------------------------------------------------------------------');
}

function timeLog(log) {
// 실행 시간을 KST로 출력
  const time_current = moment().tz('Asia/Seoul').format('YYYY-MM-DD H:mm:ss');
  console.log('[KST: ' + time_current + '] ' + log);
}

export { resSend, consoleBar, timeLog };
// (패키지처럼) 밖에서 사용할 수 있게 해주는 역할