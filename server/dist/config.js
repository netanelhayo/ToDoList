"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DBs = exports.MongoConfig = exports.PostgresConfig = exports.SERVER_PORT = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.SERVER_PORT = process.env.SERVER_PORT || 3001;
exports.PostgresConfig = {
    username: process.env.PG_USERNAME || "postgres",
    password: process.env.PG_PASSWORD || "Nh3519578624",
    hostName: process.env.PG_HOST_NAME || "localhost",
    dbName: process.env.PG_DB_NAME || "todo",
    port: Number(process.env.PG_PORT) || 5432,
    idleTimeoutMillis: 30000
};
exports.MongoConfig = {
    host: process.env.MONGO_HOST,
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
};
exports.DBs = {
    mongoDB: 0,
    postgreSql: 1
};
//# sourceMappingURL=config.js.map