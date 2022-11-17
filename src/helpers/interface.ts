export interface IntroductionFields {
  fullName:'',
  subtitle:'',
  description:'',
  location:'',
  email:'',
  portfolio_name:'',
  portfolio_url:'',
  project_name:'',
  project_url: '',
  learning: '',
  collaborating: '',
  else: '',
}


export interface IconDataField {
  name: string;
  path: string;
  toolTip: string;
  link:string;
  clicked: boolean,
}


export interface IconData {
  core:IconDataField[],
  frontend: IconDataField[],
  backend: IconDataField[],
  other:IconDataField[],
  software: IconDataField[],
  ide_software: IconDataField[],
  skills: any[],
}


export interface SocialData {
  label:string;
  name:string;
  path:string;
  link:string;
  userName: string;
}