// 데이터베이스와의 연결을 관리하는 파일입니다. 데이터베이스 연결 인스턴스를 생성하고, 연결이 유지되는지 확인합니다.

'use strict';
import dotenv from 'dotenv';
dotenv.config();

import mysql from 'mysql2/promise';
import config from '../config/config.js';

// ----------- pool ------------

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    connectionLimit: config.DB.DB_CONNECTION_LIMIT,
    multipleStatements: true
});

export {pool};

// mySQL에 연결하는 코드