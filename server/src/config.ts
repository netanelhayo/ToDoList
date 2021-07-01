import dotenv from 'dotenv';

dotenv.config();

export const SERVER_PORT = process.env.SERVER_PORT || 3001;

export const PostgresConfig = {
    username: process.env.PG_USERNAME || "postgres",
    password: process.env.PG_PASSWORD || "Nh3519578624",
    hostName: process.env.PG_HOST_NAME || "localhost",
    dbName: process.env.PG_DB_NAME || "todo",
    port: process.env.PG_PORT || "5432",
    connectionString: `postgres://${process.env.PG_USERNAME}:${process.env.PG_PASSWORD}@${process.env.PG_HOST_NAME}:${process.env.PG_PORT}/${process.env.PG_DB_NAME}`,
    idleTimeoutMillis: 30000
}


export const MongoConfig = {
    host: process.env.MONGO_HOST,
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    url: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}`,
    options: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        socketTimeoutMS: 30000,
        keepAlive: true,
        poolSoze: 50,
        autoIndex: false,
        retryWrites: false
    }
}

export const DBs = {
    mongoDB: 0,
    postgreSql: 1
}