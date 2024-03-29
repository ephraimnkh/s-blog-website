import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class LoginService {
  constructor(private userService: UsersService) {}

  login(loginCredentials: LoginDto): Promise<boolean> {
    return new Promise(async (resolve) => {
      const user = await this.userService.findOneByEmail(
        loginCredentials.email,
      );
      bcrypt.compare(
        loginCredentials.password,
        user.password,
        function (error, correctPassword) {
          if (error) {
            console.error(`Error while checking user password:`, error);
          }
          resolve(correctPassword);
        },
      );
    });
  }
}
