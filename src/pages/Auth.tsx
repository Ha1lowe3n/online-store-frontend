import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { PathRoutes } from "../routes";

const Auth: React.FC = () => {
    const location = useLocation(); // можем узнать путь
    const isLogin = location.pathname === PathRoutes.LOGIN_ROUTE;

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
                        placeholder={"Введите ваш email"}
                    />
                    <Form.Control
                        className={"mt-3"}
                        placeholder={"Введите пароль"}
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
                        <Button variant={"outline-success"}>
                            {isLogin ? "Зарегистрироваться" : "Войти"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;
