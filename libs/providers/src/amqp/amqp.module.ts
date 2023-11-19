import { Global, Module } from '@nestjs/common';
import {
  AmqpConnectionManager,
  RabbitMQModule,
  RabbitRpcParamsFactory,
} from '@golevelup/nestjs-rabbitmq';
import { ConfigService } from '@nestjs/config';
import { amqpConfig } from '@lib/providers/amqp/amqp.config';

@Global()
@Module({
  imports: [
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => amqpConfig(configService),
    }),
  ],
  providers: [RabbitRpcParamsFactory, AmqpConnectionManager],
  exports: [RabbitMQModule],
})
export class AmqpModule {}
