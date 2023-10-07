import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { AdminLoginDto } from './dto/admin-login.dto';

@Injectable()
export class AuthService {
  private prisma: PrismaService;
  constructor() {
    this.prisma = new PrismaService();
    console.log('AuthService');
  }

  async login(dataLogin: AdminLoginDto) {
    const { email, password } = dataLogin;
    if (!email || !password) {
      throw new BadRequestException('Email and password are required');
    }
    const admin = await this.prisma.admin.findFirst({
      where: { email, password },
    });
    if (!admin) {
      throw new BadRequestException('Email or password is incorrect');
    }

    return admin;
  }
  getHome() {
    return 'Get home';
  }
}
