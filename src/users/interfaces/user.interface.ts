
export interface User extends Document {
  email: string;
  password: string;
  name: string;
  createdAt: Date;
}
