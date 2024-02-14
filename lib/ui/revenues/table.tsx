import { REVENUE } from "@/lib/constants";
import { Order, RevenueEntry } from "@/lib/definitions";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

function getRevenues(
  start: Date,
  end: Date,
  orders: Order[],
  commission: number
): RevenueEntry[] {
  const startYear = start.getFullYear();
  const startMonth = start.getMonth();
  const endYear = end.getFullYear();
  const endMonth = end.getMonth();
  const months = [];
  for (let year = startYear; year <= endYear; year++) {
    let month = year === startYear ? startMonth : 0;
    const monthLimit = year === endYear ? endMonth : 11;
    while (month <= monthLimit) {
      let monthIncome = 0;
      orders
        .filter(
          (order) =>
            order.date.getFullYear() === year && order.date.getMonth() === month
        )
        .forEach((order) => (monthIncome += order.ammount));
      const monthCommission = monthIncome * commission;
      months.push({
        year,
        month,
        total: monthIncome,
        commission: monthCommission,
      });
      month++;
    }
  }
  return months;
}

export default async function RevenuesTable({
  orders,
  commission,
  start,
  end,
}: {
  orders: Order[];
  commission: number;
  start: Date;
  end: Date;
}) {
  const [state, setState] = useState<RevenueEntry[]>([]);
  useEffect(() => {
    const months = getRevenues(start, end, orders, commission);
    setState(months);
  }, [start, end, orders, commission]);
  return (
    <Table>
      <thead>
        <th>
          {REVENUE.year}/{REVENUE.month}
        </th>
        <th>{REVENUE.total}</th>
        <th>{REVENUE.commission}</th>
      </thead>
      <tbody>
        {state.map((entry) => (
          <tr key={`${entry.year}_${entry.month}`}>
            <th>
              {entry.year}/{entry.month}
            </th>
            <td>entry.total</td>
            <td>entry.commission</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
