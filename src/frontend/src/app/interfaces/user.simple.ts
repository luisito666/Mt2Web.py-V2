export interface User {
    login: string;
    password: string;
}

export interface UserLogin {
    login: string;
    email: string;
    real_name: string
    social_id: string;
    status: string;
    coins: number;
    create_time: string;
}
