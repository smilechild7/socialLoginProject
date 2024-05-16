// 서버의 핵심 비즈니스 로직을 처리합니다. 클라이언트의 요청을 받아서 적절한 서비스 로직을 호출하고, 결과를 다시 클라이언트에게 전달하는 역할을 합니다.
'use strict';
import { consoleBar, timeLog, resSend } from "../config/common.js";

const ping = (req, res) => {
    const result = true;
    res.send({result});
    consoleBar();
    timeLog('pong!');
};

export { ping };