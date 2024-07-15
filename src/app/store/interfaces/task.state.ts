export interface Task {
  id: number;
  description: string;
  checked: boolean;
}

export interface TaskState {
  tasks: Task[]
}
