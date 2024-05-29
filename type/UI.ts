import type AuthApi from "~/api/modules/auth.api";

export type FormatterFunction = (v: string) => string;

export interface IInputSetup {
  placeholder?: string;
  autocomplete?: string;
  type?: string;
  pattern?: string;
  formatter?: FormatterFunction;
  inputmode?: "numeric";
  name?: string;
}

export interface ILoginRequestBody {
  username: string;
  password: string;
}

export interface IApi {
  auth: AuthApi;
}

export type Digit = number | null;
