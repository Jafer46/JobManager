export type Project = {
  _id: string;
  name: string;
  description: string;
  endDate: string;
  startDate: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export type Document = {
  _id: string;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type User = {
  _id: string;
  fullName: string;
  email: string;
  role: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export type WorkDone = {
  _id: string;
  project: Project;
  document: Document;
  user: User;
  startDate: string;
  endDate: string;
  status: string;
  created_at: string;
  updated_at: string;
};

export type Material = {
  _id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type MaterialUsed = {
  _id: string;
  workDone: WorkDone;
  material: Material;
  quantity: number;
  created_at: string;
  updated_at: string;
};

export type Task = {
  _id: string;
  title: string;
  description: string;
  project: Project;
  startDate: string;
  endDate: string;
  assignedTo: User;
  status: string;
  created_at: string;
  updated_at: string;
};

export type Uom = {
  _id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type Category = {
  _id: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
};

export type TaskBudget = {
  _id: string;
  task: Task;
  type: string;
  quantity: number;
  uom: Uom;
  unitPrice: number;
  created_at: string;
  updated_at: string;
};

export type Contact = {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  imageUrl: string;
  address: {
    country: string;
    longitude: number;
    latitude: number;
  };
  user: User;
  created_at: string;
  updated_at: string;
};

export type Role = {
  _id: string;
  name: string;
  description: string;
  access: {
    doc: string;
    write: boolean;
    read: boolean;
    edit: boolean;
    delete: boolean;
    export: boolean;
  }[];
  created_at: Date;
  updated_at: Date;
};
