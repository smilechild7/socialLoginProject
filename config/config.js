// 서버의 구성 설정을 관리하는 파일입니다. 데이터베이스 접속 정보, 포트 설정, API 키 등 환경별 설정을 저장합니다.
export default {
    'COMPANY': 'eos',
    'SERVER_PORT': 3000,
    'DB': {
        'DATABASE': 'socialLoginProject',
        'PORT': 3306,
        'DB_CONNECTION_LIMIT': 10,
    }
}
// 상수로 쓰는 variable들을 저장
// MySQL port : 3306
// node.js port : 3000
// web port : 80