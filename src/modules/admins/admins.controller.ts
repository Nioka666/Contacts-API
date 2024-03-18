import { Controller, Get, Header, Headers, HttpCode } from '@nestjs/common';
import { AdminsService } from './admins.service';

@Controller('/api/admins')
export class AdminsController {
    constructor(private readonly adminsService: AdminsService) { }

    @Get('/list')
    @Header('Content-Type', 'application/json')
    @HttpCode(200)
    getAdminsList(): any {
        return this.adminsService.getAdminsList();
    }
}
