import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './modules/users/users.module';
import { AdminsController } from './modules/admins/admins.controller';
import { AdminsModule } from './modules/admins/admins.module';

@Module({
  imports: [UsersModule, AdminsModule],
  controllers: [AppController, AdminsController],
  providers: [AppService],
})
export class AppModule {}
