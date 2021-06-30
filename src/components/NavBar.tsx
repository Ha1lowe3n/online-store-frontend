import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { Button, Container, Nav, Navbar } from "react-bootstrap";

import { Context } from "../index";
import { PathRoutes } from "../routes";

const NavBar: React.FC = observer(() => {
    const { user } = useContext(Context);

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: "white" }} to={PathRoutes.SHOP_ROUTE}>
                    КупиДевайс
                </NavLink>
                {user.isAuth ? (
                    <Nav className="me-auto" style={{ color: "white" }}>
                        <Button variant={"outline-light"}>Админ панель</Button>
                        <Button
                            variant={"outline-light"}
                            onClick={() => user.setIsAuth(false)}
                            className={"ml-2"}
                        >
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="me-auto" style={{ color: "white" }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => user.setIsAuth(true)}
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
