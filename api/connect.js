import mysql from "mysql2";
require("dotenv").config();
const dbpass = process.env.DB_PASS;

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: dbpass,
  database: "social",
});
