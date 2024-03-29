import * as mysql from 'mysql2/promise';
// Loads .env file contents into process.env by default.
import 'dotenv/config';
import * as bcyrpt from 'bcrypt';

// bcrypt saltRounds
const saltRounds = 10;

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

const users = [
  {
    firstName: 'John',
    lastName: 'Jones',
    email: 'john.jones@example.com',
    password: 'password1@',
    author: false,
  },
  {
    firstName: 'Jane',
    lastName: 'Brown',
    email: 'jane.brown@example.com',
    password: 'password2@',
    author: true,
  },
  {
    firstName: 'David',
    lastName: 'Williams',
    email: 'david.williams@example.com',
    password: 'password3@',
    author: true,
  },
  {
    firstName: 'Lisa',
    lastName: 'Johnson',
    email: 'lisa.johnson@example.com',
    password: 'password4@',
    author: true,
  },
  {
    firstName: 'Michael',
    lastName: 'Smith',
    email: 'michael.smith@example.com',
    password: 'password5@',
    author: false,
  },
];

async function populateUserTable() {
  const tableName = 'user';
  try {
    users.forEach((user) => {
      bcyrpt.hash(user.password, saltRounds, async (error, hashedPassword) => {
        if (error) {
          console.error('bcrypt error:', error);
          return;
        }
        const connection = await mysql.createConnection(connectionConfig);
        const sql = `
            INSERT INTO ${tableName} (first_name, last_name, email, password, author, created_on)
            VALUES ('${user.firstName}', '${user.lastName}', '${user.email}', '${hashedPassword}', ${user.author ? '1' : '0'}, CURRENT_TIMESTAMP);
        `;

        await connection.execute(sql);

        console.log(
          `User ${user.firstName} ${user.lastName} created successfully!`,
        );

        await connection.end();
      });
    });
  } catch (error) {
    console.error(`Error populating table ${tableName}:`, error);
  }
}

async function populateBlogCategoryTable() {
  const tableName = 'blog_category';

  try {
    const connection = await mysql.createConnection(connectionConfig);

    const sql = `
      INSERT INTO ${tableName} (name) VALUES 
			('Web'), ('Design'), ('Technology'), ('Security'), ('Mobile'), 
			('Desktop'), ('Math'), ('Science'), ('Hardware'), ('Software'), ('AI'), ('IOT');
    `;

    await connection.execute(sql);

    console.log(`Table ${tableName} populated successfully!`);

    await connection.end();
  } catch (error) {
    console.error(`Error populating table ${tableName}:`, error);
  }
}

async function populateBlogTagTable() {
  const tableName = 'blog_tag';

  try {
    const connection = await mysql.createConnection(connectionConfig);

    const sql = `
      INSERT INTO ${tableName} (name) VALUES 
			('Web Development'), ('Productivity'), ('Open Source'), ('Technology'), ('JavaScript'), 
			('React'), ('Design'), ('User Experience'), ('Security');
    `;

    await connection.execute(sql);

    console.log(`Table ${tableName} populated successfully!`);

    await connection.end();
  } catch (error) {
    console.error(`Error populating table ${tableName}:`, error);
  }
}

populateBlogTagTable();
populateBlogCategoryTable();
populateUserTable();
