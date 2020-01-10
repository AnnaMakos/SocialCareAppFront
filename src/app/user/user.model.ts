import {Role} from "../role/role.model"
import {Institution, InstitutionDTO} from "../institution/institution.model"

export interface User{
    id: number;
    name: string;
    surname: string;
    username: string;
    email: string;
    pesel: string;
    street: string;
    streetNumber: string;
    localNumber: string;
    postcode: string;
    city: string;
    password: string;
    roles: Role[];
    institution: Institution;
}

export interface UserDTO{
    name: string;
    surname: string;
    username: string;
    email: string;
    pesel: string;
    street: string;
    streetNumber: string;
    localNumber: string;
    postcode: string;
    city: string;
    roles: string[];
    institution: InstitutionDTO;
}

export interface UserBasicDTO{
    name: string;
    surname: string;
    email: string;
    institution: InstitutionDTO;
}