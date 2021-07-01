import dotenv from 'dotenv';

dotenv.config({ path: 'env/config.env' });

export const SERVER_PORT = process.env.SERVER_PORT || 3001;

export const PostgresConfig = {
    username: process.env.PG_USERNAME || "postgres",
    password: process.env.PG_PASSWORD || "Nh3519578624",
    hostName: process.env.PG_HOST_NAME || "localhost",
    dbName: process.env.PG_DB_NAME || "todo",
    port: Number(process.env.PG_PORT) || 5432,
    idleTimeoutMillis: 30000
}


export const MongoConfig = {
    host: process.env.MONGO_HOST || "localhost:27017",
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    url: `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}`,
    options: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        socketTimeoutMS: 30000,
        keepAlive: true,
        poolSize: 50,
        autoIndex: false,
        retryWrites: false
    }
}

export const DBs = {
    mongoDB: 0,
    postgreSql: 1
}