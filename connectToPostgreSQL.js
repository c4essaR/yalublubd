const { Client} = require('pg');

const connectionString = 'postgresql://postgres:0225@localhost:5432/postgres'
const client = new Client({
    connectionString : connectionString,
});

async function connectToPostgreSQL() {
    try{
        await client.connect();
        console.log('Connectrd to PostgreSQL dtabase')

    }catch (error) {
        console.error('Error connecting to PostgreSQL:', error);
    }finally{
        await client.end();
        console.log('Connection to PostgreSQLclodes');
      }
    }

    connectToPostgreSQL();
