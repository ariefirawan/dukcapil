module.exports = {
  apps : [{
    name: "Dukcapil",
    script: "./backend/app.js",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}