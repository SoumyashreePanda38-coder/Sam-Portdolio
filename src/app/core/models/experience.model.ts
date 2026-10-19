export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  description: string[];
  highlights?: string[];
}
