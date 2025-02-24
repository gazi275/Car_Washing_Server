

export type IUser = {
    name: string;
    email: string;
    password: string;
    role: 'user' | 'admin' | 'Employee';
    address: string;
    phone: string;
}
