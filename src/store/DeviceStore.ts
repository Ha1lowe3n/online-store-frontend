import { makeAutoObservable } from "mobx";

type TypeBrandType = { id: number; name: string };
type Types = Array<TypeBrandType>;
type Brands = Array<TypeBrandType>;
export type DeviceType = {
    id: number;
    name: string;
    price: number;
    rating: number;
    img: string;
    info?: Array<{
        id: number;
        title: string;
        description: string;
    }>;
};
type DevicesType = Array<DeviceType>;

export default class DeviceStore {
    _types: Types;
    _brands: Brands;
    _devices: DevicesType;
    _selectedType: TypeBrandType;
    _selectedBrand: TypeBrandType;

    constructor() {
        this._types = [];
        this._brands = [];
        this._devices = [];
        this._selectedType = {} as TypeBrandType;
        this._selectedBrand = {} as TypeBrandType;
        makeAutoObservable(this);
    }

    // actions
    setTypes(types: Types) {
        this._types = types;
    }
    setBrands(brands: Brands) {
        this._brands = brands;
    }
    setDevices(devices: DevicesType) {
        this._devices = devices;
    }
    setSelectedType(type: TypeBrandType) {
        this._selectedType = type;
    }
    setSelectedBrand(brand: TypeBrandType) {
        this._selectedBrand = brand;
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
    get selectedBrand() {
        return this._selectedBrand;
    }
}
