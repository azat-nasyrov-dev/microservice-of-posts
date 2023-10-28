import { Module } from '@nestjs/common';
import { ProvidersModule } from '@lib/providers';
import { SharedModule } from '@lib/shared';

@Module({
  imports: [SharedModule, ProvidersModule],
})
export class AppModule {}
