import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtFactory } from '@lib/auth/config/jwt.factory';
import { GUARDS } from '@lib/auth/guards';
import { STRATEGIES } from '@lib/auth/strategies';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync(jwtFactory),
  ],
  providers: [AuthService, ...GUARDS, ...STRATEGIES],
  exports: [AuthService],
})
export class AuthModule {}
