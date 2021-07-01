import React, { useContext, useState } from "react";
import { NavLink, useHistory, useLocation } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { PathRoutes } from "../routes";
import { login, registration } from "../http/userAPI";
import { Context } from "../index";
import { UserType } from "../store/UserStore";

const Auth: React.FC = observer(() => {
    const location = useLocation(); // можем узнать путь
    const isLogin = location.pathname === PathRoutes.LOGIN_ROUTE;

    const history = useHistory();

    const { user } = useContext(Context);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registrationOrLogin = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data as UserType);
            user.setIsAuth(true);
            history.push(PathRoutes.SHOP_ROUTE);
        } catch (e) {
            const errorsMessages =
                e.response.data.errors && e.response.data.errors.errors;

            if (errorsMessages) {
                const errors: string[] = [];
                errorsMessages.forEach((err: any) => {
                    errors.push(err.msg);
                });
                alert(`${e.response.data.message} \n${errors.join("\n")}`);
            } else {
                alert(`${e.response.data.message}`);
            }
        }
    };

    return (
        <Container
            className={"d-flex justify-content-center align-items-center"}
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 450, padding: 40 }}>
                <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className={"d-flex flex-column"}>
                    <Form.Control
                        className={"mt-4"}
                        type={"email"}
                        placeholder={"Введите ваш email"}
                        value={email}
                        onChange={(e) => setEmail(e.currentTarget.value)}
                    />
                    <Form.Control
                        className={"mt-3"}
                        type={"password"}
                        placeholder={"Введите пароль"}
                        value={password}
                        onChange={(e) => setPassword(e.currentTarget.value)}
                    />
                    <Row
                        className={
                            "d-flex justify-content-between align-items-center m-0 mt-3 "
                        }
                    >
                        {isLogin ? (
                            <div
                                className={
                                    "d-flex flex-column align-items-start"
                                }
                            >
                                <span style={{ textAlign: "left" }}>
                                    Нет аккаунта?
                                </span>
                                <NavLink to={PathRoutes.REGISTRATION_ROUTE}>
                                    Зарегистрируйся!
                                </NavLink>
                            </div>
                        ) : (
                            <div
                                className={
                                    "d-flex flex-column align-items-start"
                                }
                            >
                                <span style={{ textAlign: "left" }}>
                                    Есть аккаунт?
                                </span>
                                <NavLink to={PathRoutes.LOGIN_ROUTE}>
                                    Войдите!
                                </NavLink>
                            </div>
                        )}
                        <Button
                            onClick={registrationOrLogin}
                            variant={"outline-success"}
                        >
                            {isLogin ? "Войти" : "Зарегистрироваться"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;
