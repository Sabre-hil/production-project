import { Country, Currency } from "shared/const/common";

export interface Profile {
    "name": string;
    "lastname": string;
    "age": number;
    "currency": Currency;
    "country": Country;
    "city": string;
    "username": string;
}

export interface ProfileScheme {
    data?: Profile | null;
    isLoading: boolean;
    isError?: string;
    readonly: boolean;
}