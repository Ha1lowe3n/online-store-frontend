import { authHost, host } from "./index";

export const createType = async (name: string) => {
    const { data } = await authHost.post("api/type", {
        name,
    });
    return data;
};

export const getTypes = async () => {
    const { data } = await host.get("api/type");
    return data;
};

export const createBrand = async (name: string) => {
    const { data } = await authHost.post("api/brand", {
        name,
    });
    return data;
};

export const getBrands = async () => {
    const { data } = await host.get("api/brand");
    return data;
};

export const createDevice = async (name: string) => {
    const { data } = await authHost.post("api/device", {
        name,
    });
    return data;
};

export const getDevices = async () => {
    const { data } = await host.get("api/device");
    return data;
};

export const getOneDevice = async (id: string) => {
    const { data } = await host.get(`api/device/${id}`);
    return data;
};
