import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Link,
  Chip
} from "@nextui-org/react";
import { IoPencil } from "react-icons/io5";

const DesignationTable = ({ designations }) => {
  return (
    <Table>
      <TableHeader>
      <TableColumn>Name</TableColumn>
            <TableColumn>Description</TableColumn>
            <TableColumn>Status</TableColumn>
           <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody>
        {designations?.length > 0 &&
          designations?.map((dsg) => (
            <TableRow key={dsg.id}>
              <TableCell>{dsg.name}</TableCell>
              <TableCell>{dsg.description}</TableCell>
              <TableCell>
                {dsg.status === "active" ? (
                  <Chip color="success">Active</Chip>
                ) : (
                  <Chip color="danger">Inactive</Chip>
                )}
              </TableCell>
              <TableCell>
                   <Button size='sm' as={Link} href={`/designations/edit/${dsg.id}`} isIconOnly><IoPencil /></Button>
                </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default DesignationTable;
