export class Education {
  constructor(
    public degree: string,
    public institution: string,
    public status: 'Graduated' | 'In Progress' | 'Dropped',
    public startYear: number,
    public endYear: number,
    public _id?: string
  ) {}
}