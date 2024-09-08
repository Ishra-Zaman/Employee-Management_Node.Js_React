import React from 'react';
import { Table, Badge, Spinner } from '@radix-ui/themes';

const EmployeeTable = ({ employees }) => {
  return (
    <Table.Root variant="surface">
      <Table.Header>
        <Table.Row>
          <Table.Cell>First Name</Table.Cell>
          <Table.Cell>Last Name</Table.Cell>
          <Table.Cell>Address</Table.Cell>
          <Table.Cell>Phone Number</Table.Cell>
          <Table.Cell>Email Address</Table.Cell>
          <Table.Cell>Salary</Table.Cell>
          <Table.Cell>Designation</Table.Cell>
          <Table.Cell>Actions</Table.Cell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {employees.length === 0 ? (
              <Spinner size="3" />
        ) : (
          employees.map((employees) => (
            <Table.Row key={employees.id}>
              <Table.Cell>{employees.first_name}</Table.Cell>
              <Table.Cell>{employees.last_name}</Table.Cell>
              <Table.Cell>{employees.address}</Table.Cell>
              <Table.Cell>{employees.phone}</Table.Cell>
              <Table.Cell>{employees.email_address}</Table.Cell>
              <Table.Cell>{employees.salary}</Table.Cell>
              <Table.Cell>{employees.designation_name}</Table.Cell>
              <Table.Cell>
              <a href="/employees/edit/1">Edit</a>
              </Table.Cell>
            </Table.Row>
          ))
        )}
      </Table.Body>
    </Table.Root>
  )
}

export default EmployeeTable;
