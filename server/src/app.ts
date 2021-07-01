import express, { Application } from 'express';
import cors from 'cors';
import { TaskController } from './controllers/taskController';
import { DBs, SERVER_PORT } from './config';
import { TaskProvider } from './providers/taskProvider';
import { Socket } from 'socket.io';
import { PGDB } from './DAL/postgreSql/postgresqlDB';
import { MongoDb } from './DAL/mongoDB/mongoDB';
import { DBManager } from './DAL/dbManager';

const app: Application = express();

const server = require("http").Server(app);

const io: Socket = require("socket.io")(server, {
  cors: {
    origin: '*'
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');
  io.emit('UpdateTasks');
});

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const mongodb = new MongoDb();
const pg = new PGDB();

const dbManager = new DBManager([mongodb, pg]);

dbManager.setActiveDB(DBs.postgreSql);

const taskProvider: TaskProvider = new TaskProvider(dbManager);
const taskcontroller: TaskController = new TaskController(taskProvider, io);

app.use('/tasks', taskcontroller.Router);

server.listen(SERVER_PORT, function () {
  console.log(`listening on *:${SERVER_PORT}`);
});