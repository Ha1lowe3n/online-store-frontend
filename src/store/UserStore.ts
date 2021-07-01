import { makeAutoObservable } from "mobx";

export type UserType = {
    id: number;
    email: string;
    role: string;
    iat: number;
    exp: number;
};

export default class UserStore {
    _isAuth: boolean;
    _user: UserType;

    constructor() {
        this._isAuth = false;
        this._user = {} as UserType;
        makeAutoObservable(this); // mobx следит за изменениями переменных
    }

    // actions
    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }
    setUser(user: UserType) {
        this._user = user;
    }

    // getters
    // вызываются только в том случае, если переменнная, которая используется внутри, была изменена
    get isAuth() {
        return this._isAuth;
    }
    get user() {
        return this._user;
    }
}
