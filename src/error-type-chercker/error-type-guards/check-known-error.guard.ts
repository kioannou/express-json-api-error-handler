import { AuthError, ForbiddenError, InternalServerError, NotFoundError } from "../../errors";

export function checkKnownError(error: any): boolean {
  return (error instanceof AuthError)
      || (error instanceof ForbiddenError)
      || (error instanceof InternalServerError)
      || (error instanceof NotFoundError);
}
