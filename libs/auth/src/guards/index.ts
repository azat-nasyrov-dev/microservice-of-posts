import { JwtGuard } from '@lib/auth/guards/jwt.guard';
import { GqlGuard } from '@lib/auth/guards/gql.guard';

export const GUARDS = [JwtGuard, GqlGuard];
