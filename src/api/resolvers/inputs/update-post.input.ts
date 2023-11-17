import { UpdatePostDto } from '@lib/post/application-services/commands/dto';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType()
export class UpdatePostInput implements UpdatePostDto {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  message: string;

  @Field()
  authorId: string;
}
