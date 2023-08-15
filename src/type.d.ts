type UserSliceState = {
    id: string | null;
    name: string | null;
    email: string | null;
    password: string | null;
    tasks: Task[]
    count: 0;
};

type User = {
    id: string;
    name: string;
    email: string;
    password: string;
    tasks: [];
}

type Task = {
    name: string;
    _id: string;
}

