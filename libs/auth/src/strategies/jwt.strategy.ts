import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { AuthService, ICurrentUser } from '@lib/auth';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly configService: ConfigService,
    private readonly authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_ACCESS_EXPIRES_IN'),
    });
  }

  async validate(payload: ICurrentUser): Promise<ICurrentUser> {
    const user = await this.authService.validateUser(payload.email);

    if (!user) {
      throw new UnauthorizedException(
        `User by email "${payload.email}" not found!`,
      );
    }

    return payload;
  }
}
