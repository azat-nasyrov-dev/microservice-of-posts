import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appDataSource } from '@lib/providers/typeorm/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(appDataSource.options)],
})
export class TypeormModule {}
