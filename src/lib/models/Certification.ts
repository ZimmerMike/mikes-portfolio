export class Certification {
  constructor(
    public title: string,
    public issuer: string,
    public downloadUrl: string,
    public _id?: string
  ) {}
}