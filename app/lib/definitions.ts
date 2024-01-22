export type Address = {
  streetAddress: string;
  city: string;
  postalCode: string;
  country: string;
};

export type Company = {
  name: string;
  address: Address;
  phone?: string;
  email?: string;
};

export type Contact = {
  name: string;
  role: string;
  phone: string;
  email: string;
};

export type Customer = {
  id: string;
  company: Company;
  contact: Contact;
  employee: Employee;
};

export type Employee = {
  file: string;
  name: string;
  formalName: string;
  title: string;
  birthDate: string;
  hireDate: string;
  address: Address;
  phone: string;
  extension: string;
  notes: string;
  role: string;
  comission?: number;
};

export type Order = {
  date: Date;
  company: Company;
  ammount: number;
  status: "pending" | "paid";
};
