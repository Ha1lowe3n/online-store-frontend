import React, { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { authRoutes, PathRoutes, publicRoutes } from "../routes";
import { Context } from "../index";

const AppRouter: React.FC = observer(() => {
    const { user } = useContext(Context);

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
