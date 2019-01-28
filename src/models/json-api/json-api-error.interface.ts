import { NullableString } from '../../types/nullable-string.type';

export interface IJsonApiError {
  id?: NullableString;
  links?: any;
  status?: any;
  code?: NullableString;
  title?: NullableString;
  detail?: NullableString;
  source?: any;
  meta?: any;
}
