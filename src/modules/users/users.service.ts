import { Injectable } from '@nestjs/common';
import { UsersList } from './data/usersList';

@Injectable()
export class UsersService {
    async getUsersList(): Promise<any> {
        return UsersList;
    }

    async getUserID(userID: string): Promise<any> {
        return {
            userID: userID
        };
    }

    async userSignIn(username: string, pass: string): Promise<any> {
        if (username === 'user' && pass === 'user') {
            return true;
        } else {
            return false;
        }
    }
}
