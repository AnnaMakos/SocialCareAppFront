import { User } from './user.model';

export interface Visit {
    id: number;
    visitDate: Date;
    taken: boolean;
    user: User;
    official: User;
}

export interface VisitDTO {
    id: number;
    visitDate: Date;
    taken: boolean;
    user: User;
    official: User;
}