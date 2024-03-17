import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { UsersList } from './data/usersList';

@Controller('users')
export class UsersController {
  @Get('/lists')
  getUsersList(@Res() res: any) {
    res.status(HttpStatus.OK).json(UsersList);
  }

  @Get('get-user/:userID')
  getUserByID(@Param('userID') userID: string, @Res() res: any) {
    res.json({ userID: `${userID}` });
  }
}
