import { User, UserDTO } from './user.model';
import { ChildForm, ChildFormDTO } from './child-form.model';

export interface ApplicationForm {
    id: number;
    applicationStatus: string;
    maritalStatus: string;
    citizenship: string;
    phone: string;
    comments: string;
    children: ChildForm[];
    applicant: User;
    official: User;
}

export interface ApplicationFormDTO {
    id: number;
    applicationStatus: string;
    maritalStatus: string;
    citizenship: string;
    phone: string;
    comments: string;
    children: ChildFormDTO[];
    applicant: UserDTO;
    official: UserDTO;
}

export interface ApplicationFormBasicDTO {
    applicationStatus: string;
    maritalStatus: string;
    citizenship: string;
    phone: string;
    comments: string;  
    username: string;
}
