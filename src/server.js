const express = require('express');

const startServer = async () => {
  const app = express();
  app.all('/healthcheck', function (req, res) {
    res.send('OK');
  });
  // 监听端口号
  app.listen(8080, () => {
    console.log('服务已启动, 端口8080');
  });
};

startServer();
