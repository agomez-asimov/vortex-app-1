import { ADDRESS, COMPANY, EMPLOYEE, ORDER } from "@/lib/constants";
import { Order } from "@/lib/definitions";
import { Table } from "react-bootstrap";

export default async function OrdersTable({
  orders,
  commission,
}: {
  orders: Order[];
  commission: number;
}) {
  return (
    <Table>
      <thead>
        <tr>
          <th rowSpan={2}>{ORDER.date}</th>
          <th colSpan={3}>{ORDER.company}</th>
          <th rowSpan={2}>{ORDER.ammount}</th>
          <th rowSpan={2}>{EMPLOYEE.commission}</th>
          <th rowSpan={2}>{ORDER.status}</th>
        </tr>
        <tr>
          <th>{COMPANY.name}</th>
          <th>{ADDRESS.city}</th>
          <th>{ADDRESS.country}</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order.id}>
            <td>{order.date.toISOString()}</td>
            <td>{order.company.name}</td>
            <td>{order.company.address.city}</td>
            <td>{order.company.address.country}</td>
            <td>{order.ammount * commission}</td>
            <td>{order.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
