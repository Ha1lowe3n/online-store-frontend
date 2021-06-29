import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { authRoutes, PathRoutes, publicRoutes } from "../routes";

const AppRouter: React.FC = () => {
    const isAuth = true;
    return (
        <Switch>
            {isAuth &&
                authRoutes.map(({ path, component }) => (
                    <Route key={path} path={path} component={component} exact />
                ))}
            {publicRoutes.map(({ path, component }) => (
                <Route key={path} path={path} component={component} exact />
            ))}
            <Redirect to={PathRoutes.SHOP_ROUTE} />
        </Switch>
    );
};

export default AppRouter;
