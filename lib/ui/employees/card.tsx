import { EMPLOYEE } from "@/lib/constants";
import { Employee } from "@/lib/definitions";
import { Card } from "react-bootstrap";

export default async function EmployeeCard({
  employee,
}: {
  employee: Employee;
}) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{employee.name}</Card.Title>
        <Card.Subtitle>{employee.hireDate}</Card.Subtitle>
        <Card.Text>
          <p>
            {employee.address.streetAddress}&nbsp;{employee.address.postalCode}
          </p>
          <p>
            {employee.address.city},&nbsp;{employee.address.country}
          </p>
          <p>
            <b>{EMPLOYEE.phone}</b>&nbsp;{employee.phone}
          </p>
          <p>
            <b>{EMPLOYEE.email}</b>&nbsp;{employee.email}
          </p>
          <p>
            <b>{EMPLOYEE.birthDate}</b>&nbsp:{employee.birthDate}
          </p>
        </Card.Text>
        <Card.Link href="#">
          {(!!employee.reportsTo && EMPLOYEE.manager) || EMPLOYEE.subordinates}
        </Card.Link>
        {employee.department == "sales" && (
          <Card.Link href="#">
            {
              // TODO: ADD SALES Constants
            }
          </Card.Link>
        )}
      </Card.Body>
    </Card>
  );
}
