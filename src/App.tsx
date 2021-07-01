import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { observer } from "mobx-react-lite";

import "./App.css";
import { Spinner } from "react-bootstrap";

import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import { Context } from "./index";
import { check } from "./http/userAPI";
import { UserType } from "./store/UserStore";

const App = observer(() => {
    const { user } = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check()
            .then((data) => {
                user.setUser(data as UserType);
                user.setIsAuth(true);
            })
            .finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <Spinner animation={"grow"} />;
    }

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <AppRouter />
            </BrowserRouter>
        </div>
    );
});

export default App;
