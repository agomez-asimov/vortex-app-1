import { ADDRESS, COMPANY, CONTACT, CUSTOMER } from "@/lib/constants";
import { Customer } from "@/lib/definitions";
import { Table } from "react-bootstrap";

export default async function CustomersTable({
  customers,
}: {
  customers: Customer[];
}) {
  return (
    <Table>
      <thead>
        <tr>
          <th colSpan={5}>{CUSTOMER.company}</th>
          <th colSpan={4}>{CUSTOMER.contact}</th>
        </tr>
        <tr>
          <th>{COMPANY.name}</th>
          <th>{ADDRESS.streetAddress}</th>
          <th>{ADDRESS.city}</th>
          <th>{ADDRESS.postalCode}</th>
          <th>{ADDRESS.country}</th>
          <th>{CONTACT.name}</th>
          <th>{CONTACT.role}</th>
          <th>{CONTACT.phone}</th>
          <th>{CONTACT.email}</th>
        </tr>
      </thead>
      <tbody>
        {customers.map((customer) => (
          <tr key={customer.id}>
            <td>{customer.company.name}</td>
            <td>{customer.company.address.streetAddress}</td>
            <td>{customer.company.address.city}</td>
            <td>{customer.company.address.postalCode}</td>
            <td>{customer.company.address.country}</td>
            <td>{customer.contact.name}</td>
            <td>{customer.contact.role}</td>
            <td>{customer.contact.phone}</td>
            <td>{customer.contact.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
