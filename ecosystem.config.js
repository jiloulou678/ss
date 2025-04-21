module.exports = {
  apps: [
    {
      name: "shadowsocks-ws",
      script: "./server.min.mjs",
      env: {
        "NODE_ENV": "production",
        "METHOD": "aes-256-gcm",
        "PASS": "notfre",
        // "PROXY": "https://github.com",
     
        "PORT": 4433
      }
    }
  ]
}
