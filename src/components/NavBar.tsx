import React, { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { Context } from "../index";
import { PathRoutes } from "../routes";

const NavBar: React.FC = observer(() => {
    const { user } = useContext(Context);
    const history = useHistory();

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: "white" }} to={PathRoutes.SHOP_ROUTE}>
                    КупиДевайс
                </NavLink>
                {user.isAuth ? (
                    <Nav className="me-auto" style={{ color: "white" }}>
                        {user.user.role === "ADMIN" && (
                            <Button
                                variant={"outline-light"}
                                onClick={() =>
                                    history.push(PathRoutes.ADMIN_ROUTE)
                                }
                            >
                                Админ панель
                            </Button>
                        )}
                        <Button
                            variant={"outline-light"}
                            className={"ml-2"}
                            onClick={() => {
                                history.push(PathRoutes.LOGIN_ROUTE);
                                user.setIsAuth(false);
                            }}
                        >
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="me-auto" style={{ color: "white" }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(PathRoutes.LOGIN_ROUTE)}
                        >
                            Войти
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    );
});

export default NavBar;
