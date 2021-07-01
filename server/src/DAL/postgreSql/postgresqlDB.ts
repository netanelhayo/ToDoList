import { TaskDTO } from "../../types/task";
import { ITodoDatabase } from "../IDatabase";
import { Pool } from 'pg';
import {
    PostgresConfig
} from "../../config";


export class PGDB implements ITodoDatabase {
    private pool: Pool;
    constructor() {
        this.pool = new Pool({
            max: 20,
            user: PostgresConfig.username,
            host: PostgresConfig.hostName,
            database: PostgresConfig.dbName,
            password: PostgresConfig.password,
            port: PostgresConfig.port,
            idleTimeoutMillis: PostgresConfig.idleTimeoutMillis
        });
    }

    async getAllTasks(): Promise<TaskDTO[]> {
        let todos: TaskDTO[];
        try {
            const client = await this.pool.connect();

            const query = "SELECT * FROM tasks";
            const { rows } = await client.query(query);
            todos = rows;

            client.release();
        }
        catch (e) {
            console.log(e);
        }
        return todos || [];
    }
    async addTask(task: TaskDTO) {
        const client = await this.pool.connect();

        const query = `INSERT INTO tasks(id, title, description, assignTo, completed) 
        VALUES('${task.id}', '${task.title}', '${task.description}', '${task.assignTo}', '${task.completed}')`;
        await client.query(query);

        client.release();
    }

    async toggleCompletedForTask(taskId: string) {
        const client = await this.pool.connect();

        const query = `UPDATE tasks 
        SET completed = NOT completed
        WHERE id = '${taskId}'`;
        await client.query(query);

        client.release();
    }
    async deleteTask(taskId: string) {
        const client = await this.pool.connect();

        const query = `DELETE FROM tasks 
        WHERE id = '${taskId}'`;
        await client.query(query);

        client.release();
    }

}
