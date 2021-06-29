import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { authRoutes, PathRoutes, publicRoutes } from "../routes";
import user from "../store/UserStore";

const AppRouter: React.FC = observer(() => {
    console.log(user);
    return (
        <Switch>
            {user.isAuth &&
                authRoutes.map(({ path, component }) => (
                    <Route key={path} path={path} component={component} exact />
                ))}
            {publicRoutes.map(({ path, component }) => (
                <Route key={path} path={path} component={component} exact />
            ))}
            <Redirect to={PathRoutes.SHOP_ROUTE} />
        </Switch>
    );
});

export default AppRouter;
