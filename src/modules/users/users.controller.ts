import { Controller, Get, Header, HttpCode, Param, Query, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';

@Controller('/api/users')

export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  // showing user-list route
  @Get('/list')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  getUsersList(): Record<any, any> {
    return this.usersService.getUsersList();
  }

  // user finder route
  @Get('/find/:userID')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  getUserID(@Param('userID') userID: string) {
    return this.usersService.getUserID(userID);
  }

  // user sign-up route
  @Get('/sign-up')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  async userSignUp(
    @Query('username') username: string,
    @Query('password') password: string,
    @Res() res: Response,
    @Req() req: Request
  ): Promise<any> {
    const newUser = await this.usersService.userSignUp(username, password);
    res.cookie('newUser', newUser);
    res.status(201).send(req.cookies['newUser']);
  }

  // user sign-in route
  @Get('/sign-in')
  @Header('Content-Type', 'application/json')
  @HttpCode(200)
  async userSignIn(
    @Query('username') username: string,
    @Query('pass') pass: string,
    @Res() res: any
  ): Promise<any> {
    const result = await this.usersService.userSignIn(username, pass);
    if (result == true) {
      res.status(200).json({
        message: "Sign In Successfully!"
      });
    } else {
      res.status(400).json({
        message: "Sign In Failed!"
      });
    }
  }
}
