import { fetchOrders } from "@/lib/data";
import { Employee, Order } from "@/lib/definitions";
import RevenuesTable from "@/lib/ui/revenues/table";
import { Stack } from "react-bootstrap";

export default async function RevenuesPage({
  salesPerson,
}: {
  salesPerson: Employee;
}) {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0);
  const orders: Order[] = await fetchOrders(salesPerson.file);
  const commission: number = salesPerson.commission || 0;

  return (
    <Stack>
      <h1>Ventas y </h1>
      <RevenuesTable
        orders={orders}
        start={start}
        end={now}
        commission={commission}
      />
    </Stack>
  );
}
