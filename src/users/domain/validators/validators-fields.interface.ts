export type FieldsError = {
  [field: string]: string[];
};

export interface ValidatorFieldsInterface<PropsValidated> {
  errors: FieldsError;
  validatedDate: PropsValidated;
  validate(data: any): boolean;
}
