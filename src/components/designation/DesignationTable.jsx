import React from 'react'
import {Table, Badge, Spinner} from '@radix-ui/themes'

const DesignationTable = ({designations}) => {
  return (
    <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.Cell>Name</Table.Cell>
            <Table.Cell>Description</Table.Cell>
            <Table.Cell>Status</Table.Cell>
            <Table.Cell>Actions</Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {designations.length === 0 ? (
            <Spinner size="3" />
          ) : (
            designations.map((designations) => (
              <Table.Row key={designations.id}>
                <Table.Cell>{designations.name}</Table.Cell>
                <Table.Cell>{designations.description}</Table.Cell>
                <Table.Cell>
                  {designations.status === "active" ? (
                    <Badge color="green">Active</Badge>
                  ) : (
                    <Badge color="red">Inactive</Badge>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <a href="/designations/edit/1">Edit</a>
                </Table.Cell>
              </Table.Row>
            ))
          )}
        </Table.Body>
      </Table.Root>
  )
}

export default DesignationTable