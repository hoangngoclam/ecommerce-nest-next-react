import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AdminLoginDto } from './dto/admin-login.dto';

@Controller('auth')
export class AuthController {
  private readonly authService: AuthService;
  constructor() {
    this.authService = new AuthService();
  }

  @Post()
  login(@Body() adminLoginDto: AdminLoginDto) {
    return this.authService.login(adminLoginDto);
  }
}
