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
  id?: number;
  [key: string]: string | number | undefined;
}

export interface IPhoneBook {
  id?: number;
  first_name: string;
  last_name: string;
  company: string;
  title: string;
  mobile_num: number;
  phone_num: number;
}

export interface IPost {
  post: any;
  posts: any;
  id: number;
  title: string;
  description: string;
  body: string;
  openModal: boolean;
  labelname: string;
}
