import AdminPanel from "./pages/AdminPanel";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";

export enum PathRoutes {
    ADMIN_ROUTE = "/admin",
    LOGIN_ROUTE = "/login",
    REGISTRATION_ROUTE = "/registration",
    SHOP_ROUTE = "/",
    BASKET_ROUTE = "/basket",
    DEVICE_ROUTE = "/device",
}

export const authRoutes = [
    {
        path: PathRoutes.ADMIN_ROUTE,
        component: AdminPanel,
    },
    {
        path: PathRoutes.BASKET_ROUTE,
        component: Basket,
    },
];

export const publicRoutes = [
    {
        path: PathRoutes.DEVICE_ROUTE + "/:id",
        component: DevicePage,
    },
    {
        path: PathRoutes.REGISTRATION_ROUTE,
        component: Auth,
    },
    {
        path: PathRoutes.LOGIN_ROUTE,
        component: Auth,
    },
    {
        path: PathRoutes.SHOP_ROUTE,
        component: Shop,
    },
];
