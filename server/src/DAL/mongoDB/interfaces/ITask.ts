import { Document } from 'mongoose';

export default interface ITask extends Document {
    id: string;
    title: string;
    description: string;
    completed: boolean;
    assignTo: string;
}