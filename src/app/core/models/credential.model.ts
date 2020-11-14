export class CredentialModel {

  name: string;
  endPoint: string;
  bodyRequest: object;
  tokenMapping: string;

  constructor(data: CredentialModel | any) {
    Object.assign(this, data);
  }

}
