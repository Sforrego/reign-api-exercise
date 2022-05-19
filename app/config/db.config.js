module.exports = {
    HOST: "localhost",
    USER: "me",
    PASSWORD: "999999999",
    DB: "reign_api",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };