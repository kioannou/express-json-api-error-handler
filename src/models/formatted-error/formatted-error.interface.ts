import { IFormattedErrorDetails } from "./formatted-error-details.interface";

export interface IFormattedError {
  details: IFormattedErrorDetails; // The description is filled during formatting
  errors: any[]; // Array that holds the raw error bodies
}
