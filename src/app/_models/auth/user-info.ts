export interface UserInfo {
  email : string,
  phone : string,
  password : string,
  firstName : string,
  lastName : string,
  pseudo : string,
  birthDate : Date,
  section : WorkSection[]
}

export type WorkSection = 'informatique' | 'design' | 'marketing' | 'audiovisuel';
