import { AmqpBaseRequest } from '@amqp/amqp-contracts/shared/amqp-base-request.interface';

export interface AmqpBaseResponse<T = unknown> extends AmqpBaseRequest<T> {
  error?: {
    code: string;
    message: string;
  };
}
