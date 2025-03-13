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
import { useSelector } from "react-redux";

const AppliedJobTable = () => {
  const { allAppliedJobs } = useSelector((store) => store.job);
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
          {allAppliedJobs.length <= 0 ? (
            <span>You havent applied for any jobs yet</span>
          ) : (
            allAppliedJobs.map((appliedJob) => (
              <TableRow key={appliedJob?._id}>
                <TableCell>{appliedJob?.createdAt.split("T")[0]}</TableCell>
                <TableCell>{appliedJob.job.title}</TableCell>
                <TableCell>{appliedJob.job.company?.name}</TableCell>
                <TableCell className="text-right">
                  <Badge
                    className={`bg-black text-white rounded-md ${
                      appliedJob?.status === "rejected"
                        ? "bg-red-400"
                        : appliedJob?.status === "pending"
                        ? "bg-gray-400"
                        : "bg-green-400"
                    }`}
                  >
                    {appliedJob?.status?.toUpperCase()}
                  </Badge>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default AppliedJobTable;
