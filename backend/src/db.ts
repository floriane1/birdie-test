import * as mysql from "mysql";

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const dbPool = mysql.createPool(dbConfig);
export default dbPool;
