import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers';
import { AuthModule } from '@lib/auth';
import { ResolversModule } from './resolvers';

@Module({
  imports: [ControllersModule, AuthModule, ResolversModule],
})
export class ApiModule {}
