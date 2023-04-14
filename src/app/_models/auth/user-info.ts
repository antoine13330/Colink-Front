export interface UserInfo {
  email : string,
  phone : string,
  password : string,
  firstName : string,
  lastName : string,
  pseudo : string,
  section : WorkSection[]
}

export type WorkSection = 'informatique' | 'design' | 'marketing' | 'audiovisuel';
