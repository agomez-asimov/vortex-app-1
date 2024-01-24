import { Customer } from "@/app/lib/definitions";
import { Table } from "react-bootstrap";



export default async function CustomersTable({
    customers
}:{ customers: Customer[]}){
    return (
        <>
        <h1>Customers</h1>
        <Table>
            <thead>
                <tr>
                    <th>Compay</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Postal Code</th>
                    <th>Country</th>
                    <th>Contact Name</th>
                    <th>Contact Phone</th>
                    <th>Contact Email</th>
                </tr>
            </thead>
            <tbody>
                {customers.map(customer => (
                    <tr>
                        <td>{customer.company.name}</td>
                        <td>{customer.company.address.streetAddress}</td>
                        <td>{customer.company.address.city}</td>
                        <td>{customer.company.address.postalCode}</td>
                        <td>{customer.company.address.country}</td>
                        
                    </tr>
                )}
            </tbody>
        </Table>
        </>
    )
}