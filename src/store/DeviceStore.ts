import { makeAutoObservable } from "mobx";

type TypeBrandType = { id: number; name: string };
type Types = Array<TypeBrandType>;
type Brands = Array<TypeBrandType>;
type Devices = Array<{
    id: number;
    name: string;
    price: number;
    rating: number;
    img: string;
}>;

export default class DeviceStore {
    _types: Types;
    _brands: Brands;
    _devices: Devices;
    _selectedType: TypeBrandType;

    constructor() {
        this._types = [
            { id: 1, name: "Холодильники" },
            { id: 2, name: "Смартфоны" },
            { id: 3, name: "Ноутбуки" },
            { id: 4, name: "Телевизоры" },
        ];
        this._brands = [
            { id: 1, name: "Samsung" },
            { id: 2, name: "Apple" },
        ];
        this._devices = [
            {
                id: 1,
                name: "Iphone 12 pro",
                price: 10000,
                rating: 5,
                img: "https://www.ixbt.com/img/n1/news/2019/10/4/EJ2JsTuX0AAEmWm_large.jpg",
            },
            {
                id: 2,
                name: "Samsung a51",
                price: 12000,
                rating: 5,
                img: "https://prostoreshop.ru/wp-content/uploads/2020/02/samsung-a51-2019-128-gb-belyj3.jpg",
            },
            {
                id: 3,
                name: "Holodos",
                price: 14000,
                rating: 5,
                img: "https://cdn.kitchen-time.ru/products/original/bb58326a0c8e2957ccff0a340bf2b49e.jpg",
            },
        ];
        this._selectedType = {} as TypeBrandType;
        makeAutoObservable(this);
    }

    // actions
    setTypes(types: Types) {
        this._types = types;
    }
    setBrands(brands: Brands) {
        this._brands = brands;
    }
    setDevices(devices: Devices) {
        this._devices = devices;
    }
    setSelectedType(type: TypeBrandType) {
        this._selectedType = type;
    }

    // getters
    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
}
