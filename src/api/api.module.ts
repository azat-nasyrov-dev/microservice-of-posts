import { Module } from '@nestjs/common';
import { ControllersModule } from './controllers';
import { AuthModule } from '@lib/auth';
import { ResolversModule } from './resolvers';
import { ChannelsModule } from './channels/channels.module';

@Module({
  imports: [ControllersModule, AuthModule, ResolversModule, ChannelsModule],
})
export class ApiModule {}
