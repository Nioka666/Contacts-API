import { Injectable } from '@nestjs/common';
import { adminsList } from './data/adminsList';

@Injectable()
export class AdminsService {
    async getAdminsList(): Promise<any> {
        return {
            adminsList: adminsList,
            roles: [
                'Head Admin', 'Narrow Admin'
            ]
        }
    }
}
