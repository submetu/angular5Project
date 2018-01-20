
export class HttpOptionsModel {
  path: string;
  data: any;
  loginRequired: boolean;
  isFormData:boolean;

  constructor(path?:string, data?:any, loginRequired?:boolean, isFormData?:boolean) {
    this.path = path;
    this.data = data;
    this.loginRequired = loginRequired || false;
    this.isFormData = isFormData || false;
  }
}
