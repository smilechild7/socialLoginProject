// 서버의 진입점입니다. 익스프레스 앱을 생성하고 미들웨어를 설정합니다. 라우트를 정의하고 서버를 시작하는 역할을 합니다.

import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

import { ping } from "./controller/system.js";
import { getAllUsers } from "./lib/userInfo.js";

const serverPort = 3000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
const router = express.Router();

router.route('/ping').get(ping);
router.route('/all-users').get(getAllUsers);

app.use('/socialLoginProject/api/v1', router);
app.listen(serverPort);
