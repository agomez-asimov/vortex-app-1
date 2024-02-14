import { fetchEmployees } from "@/lib/data";
import EmployeesTable from "@/lib/ui/employees/table";
import { Stack } from "react-bootstrap";

export default async function EmployeesPage({}) {
  const employees = await fetchEmployees();
  return (
    <Stack>
      <h1>Empleados</h1>
      <EmployeesTable employees={employees} />
    </Stack>
  );
}
