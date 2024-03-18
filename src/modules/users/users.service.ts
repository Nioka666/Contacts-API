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

    async userSignUp(username: string, password: string): Promise<any> {
        if (username && password) {
            const newUser = {
                status: 200,
                message: "User Created!",
                newUser: {
                    username: username,
                    password: password
                }
            };
            return newUser;
        } else {
            return {
                status: 301,
                message: "Sign Up Failed!"
            };
        }
    }


    async userSignIn(username: string, pass: string): Promise<any> {
        if (username === 'user' && pass === 'user') {
            return true;
        } else {
            return false;
        }
    }
}
