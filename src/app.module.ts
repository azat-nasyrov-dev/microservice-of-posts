import { Module } from '@nestjs/common';
import { ProvidersModule } from '@lib/providers';

@Module({
  imports: [ProvidersModule],
})
export class AppModule {}
