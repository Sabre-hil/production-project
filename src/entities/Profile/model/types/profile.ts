import { Country } from "entities/Country/model/types/country";
import { Currency } from "entities/Currency/model/types/currency";

export interface Profile {
    "name"?: string;
    "lastname"?: string;
    "age"?: number;
    "currency"?: Currency;
    "country"?: Country;
    "city"?: string;
    "username"?: string;
    "avatar"?: string;
}

export interface ProfileSchema {
    data?: Profile;
    form?: Profile;
    isLoading?: boolean;
    isError?: string;
    readonly: boolean;
}