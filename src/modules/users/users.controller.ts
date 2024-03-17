import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { UsersList } from './data/usersList';

@Controller('users')

export class UsersController {
  @Get('/lists')
  getUsersList(@Res() res: Response) {
    res.status(HttpStatus.OK).json(UsersList);
  }

  @Get('get-user/:userID')
  getUserByID(@Param('userID') userID: string, @Res() res: Response) {
    res.json({ userID: `${userID}` });
  }
}
