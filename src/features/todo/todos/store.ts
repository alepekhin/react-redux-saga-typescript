export interface TodoData {
  id?: number;
  text?: string;
  completed?: boolean;
}

export type TodoStore = TodoData[];
