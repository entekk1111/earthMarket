const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: "../src/main/resources/static",
  devServer: {
    port: 8080, // 접속 포트 변경
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        changeOrigin: true,
      },
    }, // devServer :  Back-End , 즉 Spring Boot의 내장 was의 주소를 작성하게 되면 된다.
  },
});
