import { RabbitExchangeConfig } from './rabbit-exchange-config.interface';
import { QueueOptions } from '@golevelup/nestjs-rabbitmq';

export interface QueueDeclaration {
  exchange: RabbitExchangeConfig;
  routingKey: string;
  queue: string;
  queueOptions: QueueOptions;
}
