import * as mysql from 'mysql2/promise';
// Loads .env file contents into process.env by default.
import 'dotenv/config';

const host = process.env.SEBENZA_DB_HOST;
const user = process.env.SEBENZA_ADMIN_USERNAME;
const password = process.env.SEBENZA_ADMIN_PASSWORD;
const database = process.env.SEBENZA_DB_NAME;

// Replace with your actual connection details
const connectionConfig = {
  host,
  user,
  password,
  database,
};

async function createUserTable() {
  const tableName = 'user';
  try {
    const connection = await mysql.createConnection(connectionConfig);

    const sql = `
        CREATE TABLE IF NOT EXISTS ${tableName} (
					id INT AUTO_INCREMENT PRIMARY KEY,
					first_name VARCHAR(255) NOT NULL,
					last_name VARCHAR(255) NOT NULL,
					email VARCHAR(255) NOT NULL UNIQUE,
					password VARCHAR(255) NOT NULL,
					author TINYINT(1) NOT NULL DEFAULT 0,
					created_on DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
        );
    `;

    await connection.execute(sql);

    console.log(`Table ${tableName} created successfully!`);

    await connection.end();
  } catch (error) {
    console.error(`Error creating table ${tableName}:`, error);
  }
}

async function createBlogCategoryTable() {
  const tableName = 'blog_category';

  try {
    const connection = await mysql.createConnection(connectionConfig);

    const sql = `
      CREATE TABLE IF NOT EXISTS ${tableName} (
				id INT AUTO_INCREMENT PRIMARY KEY,
				name VARCHAR(255) NOT NULL
			);
    `;

    await connection.execute(sql);

    console.log(`Table ${tableName} created successfully!`);

    await connection.end();
  } catch (error) {
    console.error(`Error creating table ${tableName}:`, error);
  }
}

async function createBlogTagTable() {
  const tableName = 'blog_tag';

  try {
    const connection = await mysql.createConnection(connectionConfig);

    const sql = `
      CREATE TABLE IF NOT EXISTS ${tableName} (
				id INT AUTO_INCREMENT PRIMARY KEY,
				name VARCHAR(255) NOT NULL
			);
    `;

    await connection.execute(sql);

    console.log(`Table ${tableName} created successfully!`);

    await connection.end();
  } catch (error) {
    console.error(`Error creating table ${tableName}:`, error);
  }
}

createUserTable();
createBlogCategoryTable();
createBlogTagTable();
