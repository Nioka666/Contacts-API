import { Controller, Get, Header, HttpCode, Param, Query, Res } from '@nestjs/common';
import { UsersService } from './users.service';

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
  userSignUp(
    @Query() username: string,
    @Query() pass: string,
  ) {
    return this.usersService.userSignUp(username, pass);
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
