import { ApplicationForm } from './application-form.model';

export interface ChildForm {
    id: number;
    name: string;
    surname: string;
    pesel: string;
    citizenship: string;
    appForm: ApplicationForm;
}

export interface ChildFormDTO {
    id: number;
    name: string;
    surname: string;
    pesel: string;
    citizenship: string;
}

export interface ChilFormBasicDTO {
    name: string;
    surname: string;
    pesel: string;
    citizenship: string;
}
