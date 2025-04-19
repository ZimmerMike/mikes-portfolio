export interface ContactInfo {
  email: string;
  phone: string;
  meetingLink: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface AboutMe {
  _id?: string;
  userId: string;
  summary: string;
  interests: string[];
  languages: Language[];
  contact: ContactInfo;
}