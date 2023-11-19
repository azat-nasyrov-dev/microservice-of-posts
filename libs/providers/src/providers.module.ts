import { Module } from '@nestjs/common';
import { TypeormModule } from './typeorm/typeorm.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { apolloDriverConfig } from '@lib/providers/graphql';
import { AmqpModule } from './amqp/amqp.module';

@Module({
  imports: [
    TypeormModule,
    GraphQLModule.forRoot<ApolloDriverConfig>(apolloDriverConfig),
    AmqpModule,
  ],
})
export class ProvidersModule {}
