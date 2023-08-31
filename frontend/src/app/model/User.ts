export interface User {
  id: number;
  name: string;
  email: string;
  type: number;
  password: string;
  adCompany?: string;
  adList?: object;
  taxiList?: object;
}