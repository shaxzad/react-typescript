export interface Customer {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  description: string;
}

export interface ICustomerDetails {
  id: number;
  [key: string]: string | number;
}
