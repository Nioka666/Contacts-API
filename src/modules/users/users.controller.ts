import { Controller, Get, Header, HttpCode, Param, Query, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';

@Controller('/api/users')

export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @Get()
  @HttpCode(200)
  sayHelloFromUser(@Res() res: any): Record<any, any> {
    return this.usersService.sayHelloFromUser(res);
  }

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
    const result = await this.usersService.userSignUp(username, password);
    if (result.status === 200) {
      res.cookie('newUser', result.newUser);
      return res.status(201).json(result);
    } else {
      return res.status(301).json(result);
    }
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
