import { Socket } from 'socket.io';
import express, { Request, Response, Router } from 'express';
import { TaskProvider } from '../providers/taskProvider';

export class TaskController {
    public Router: Router;

    constructor(private provider: TaskProvider, private socket: Socket) {
        this.Router = express.Router();
        this.initializeRoutes(this.provider, this.socket);
    }

    private initializeRoutes(provider: TaskProvider, socket: Socket) {
        this.Router.get('/', async function (req: Request, res: Response) {
            res.send(await provider.getAllTasks());
        });

        this.Router.delete('/:id', async function (req: Request, res: Response) {
            try {
                await provider.deleteTask(req.params.id);
                socket.emit('UpdateTasks');
                res.send(200);
            } catch (e) {
                res.send(400);
            }
        });

        this.Router.put('/:id', async function (req: Request, res: Response) {
            try {
                await provider.toggleCompleted(req.params.id);
                socket.emit('UpdateTasks');
                res.send(200);
            } catch (e) {
                res.send(400);
            }
        });

        this.Router.post('/', async function (req: Request, res: Response) {
            try {
                await provider.addTask({
                    id: req.body.id,
                    title: req.body.title,
                    description: req.body.description,
                    completed: req.body.completed,
                    assignTo: req.body.assignTo
                });
                socket.emit('UpdateTasks');
                res.send(200);
            } catch (e) {
                res.send(400);
            }
        });
    }
}