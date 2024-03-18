import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getHello(): Promise<any> {
    return "<center><h1 style='margin-top: 40vh'>Nioka Nest API..</h1></center>";
  }
}
