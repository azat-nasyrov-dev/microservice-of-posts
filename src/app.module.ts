import { Module } from '@nestjs/common';
import { ProvidersModule } from '@lib/providers';
import { SharedModule } from '@lib/shared';
import { ApiModule } from './api';
import { DomainsModule } from './domains/domains.module';

@Module({
  imports: [SharedModule, ProvidersModule, ApiModule, DomainsModule],
})
export class AppModule {}
