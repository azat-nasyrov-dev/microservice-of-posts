import { RabbitExchangeConfig } from '@amqp/amqp-contracts/shared';

export const EXCHANGE_POST: RabbitExchangeConfig = {
  name: 'post',
  type: 'direct',
};
