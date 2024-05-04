export class User {
    id: string = "";
    user_name: string = "";
    user_nickname: string = "";
    user_gender: string = "";
    user_hobby: string = "";
    user_crushName: string = "";
}

export interface iUser {
    id: string;
    user_name: string,
    user_nickname: string,
    user_gender: string,
    user_hobby: string,
    user_crushName: string,
}