import { Module } from '@nestjs/common';
import { ProvidersModule } from '@lib/providers';
import { SharedModule } from '@lib/shared';
import { ApiModule } from './api';

@Module({
  imports: [SharedModule, ProvidersModule, ApiModule],
})
export class AppModule {}
