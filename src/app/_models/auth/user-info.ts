import { JWT_TOKEN_RESPONSE } from "./jwt";

export interface UserInfo {
  email : string,
  phone : string,
  password : string,
  firstName : string,
  lastName : string,
  pseudo : string,
  section : WorkSection[]
  jwt : JWT_TOKEN_RESPONSE
}

export type WorkSection = 'informatique' | 'design' | 'marketing' | 'audiovisuel';
