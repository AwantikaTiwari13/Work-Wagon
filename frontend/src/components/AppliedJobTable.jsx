import React from "react";
import { Badge } from "./ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

const AppliedJobTable = () => {
  return (
    <div>
      <Table>
        <TableCaption>your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>date</TableHead>
            <TableHead>job role</TableHead>
            <TableHead>company</TableHead>
            <TableHead className="text-right">status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 2].map((item, index) => (
            <TableRow key={index}>
              <TableCell>12 july</TableCell>
              <TableCell>sde</TableCell>
              <TableCell>oracle</TableCell>
              <TableCell className="text-right">
                <Badge>selected</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
