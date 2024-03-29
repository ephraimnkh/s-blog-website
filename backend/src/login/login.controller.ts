import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private loginService: LoginService) {}

  @Post()
  login(@Body() loginCredentials: LoginDto): Promise<boolean> {
    return this.loginService.login(loginCredentials);
  }
}
