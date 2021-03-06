export type TaskStatus = 'done' | 'in-progress' | 'pending';

export interface ITaskData {
  id?: number;
  title: string;
  content: string;
  status: TaskStatus;
  createdAt?: Date;
  updatedAt?: Date;
}

// export interface ITaskModel {
//   getAll(): Promise<ITaskData[] | undefined>;
//   createTask(): Promise<ITaskData | undefined>;
//   updateTask(): any;
//   deleteTask(): any;
// }
