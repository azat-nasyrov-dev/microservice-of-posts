import { AmqpBaseRequest, QueueDeclaration } from '../../shared';
import { EXCHANGE_POST } from '@amqp/amqp-contracts/exchanges';
import {
  CreatePostRequest,
  PostResponse,
} from '@amqp/amqp-contracts/queues/post/interfaces';

export namespace CreatePostContract {
  export const queue: QueueDeclaration = {
    exchange: EXCHANGE_POST,
    queue: `${EXCHANGE_POST.name}-create`,
    routingKey: `${EXCHANGE_POST.name}-create`,
    queueOptions: {
      durable: true,
    },
  };

  export type request = AmqpBaseRequest<CreatePostRequest>;
  export type response = AmqpBaseRequest<PostResponse>;
}
