import { makeAutoObservable } from "mobx";

export default class UserStore {
    #isAuth: boolean;
    #user: any;

    constructor() {
        this.#isAuth = false;
        this.#user = {};
        makeAutoObservable(this); // mobx следит за изменениями переменных
    }

    setIsAuth(bool: boolean) {
        this.#isAuth = bool;
    }
}
