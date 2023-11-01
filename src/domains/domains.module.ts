import { Global, Module } from '@nestjs/common';
import { PostModule } from '@lib/post';

@Global()
@Module({
  imports: [PostModule],
  exports: [PostModule],
})
export class DomainsModule {}
