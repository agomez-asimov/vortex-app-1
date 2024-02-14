import { fetchOrders } from "@/lib/data";
import { Employee, Order } from "@/lib/definitions";
import OrdersTable from "@/lib/ui/orders/table";
import { Stack } from "react-bootstrap";

export default async function OrdersPage({
  salesPerson,
}: {
  salesPerson: Employee;
}) {
  const orders: Order[] = await fetchOrders(salesPerson.file);
  const commission: number = salesPerson.commission || 0;
  return (
    <Stack>
      <h1>Orders</h1>
      <OrdersTable orders={orders} commission={commission} />
    </Stack>
  );
}
