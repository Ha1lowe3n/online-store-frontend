import { makeAutoObservable } from "mobx";

class UserStore {
    _isAuth: boolean;
    _user: any;

    constructor() {
        this._isAuth = false;
        this._user = {};
        makeAutoObservable(this); // mobx следит за изменениями переменных
    }

    // actions
    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }
    setUser(user: any) {
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

const user = new UserStore();

export default user;
