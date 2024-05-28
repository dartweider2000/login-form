export type FormatterFunction = (v: string) => string;

export interface IInputSetup {
  placeholder?: string;
  autocomplete?: string;
  type?: string;
  pattern?: RegExp;
  formatter?: FormatterFunction;
}
