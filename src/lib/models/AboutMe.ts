export class AboutMe {
  constructor(
    public interests: string[],
    public summary: string,
    public skills: { name: string; years: number, userId: string }[],
    public languages: { name: string; level: 'Basic' | 'Intermediate' | 'Advanced' | 'Native' }[],
    public contact: {
      email: string;
      phone: string;
      scheduleLink?: string;
    },
    public _id?: string
  ) {}
}