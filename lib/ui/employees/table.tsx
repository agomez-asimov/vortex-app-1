import { EMPLOYEE } from "@/lib/constants";
import { Employee } from "@/lib/definitions";
import { Table } from "react-bootstrap";

export default async function EmployeesTable({
  employees,
}: {
  employees: Employee[];
}) {
  return (
    <Table>
      <thead>
        <tr>
          <th>{EMPLOYEE.file}</th>
          <th>{EMPLOYEE.name}</th>
          <th>{EMPLOYEE.birthDate}</th>
          <th>{EMPLOYEE.hireDate}</th>
          <th>{EMPLOYEE.email}</th>
          <th>{EMPLOYEE.phone}</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.file}>
            <td>{employee.file}</td>
            <td>{employee.name}</td>
            <td>{employee.birthDate}</td>
            <td>{employee.hireDate}</td>
            <td>{employee.email}</td>
            <td>{employee.phone}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
