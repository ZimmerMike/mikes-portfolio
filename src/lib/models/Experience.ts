export class Experience {
  constructor(
    public jobTitle: string,
    public company: string,
    public startDate: string,
    public endDate?: string,
    public description: string,
    public _id?: string
  ) {}
}