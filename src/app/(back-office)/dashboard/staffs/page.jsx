import React from "react";
import PageHeader from "@/app/components/backoffice/PageHeader";
import TableActions from "@/app/components/backoffice/TableActions";

export default function Staffs() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Staffs"
        href="/dashboard/staffs/new"
        linkTitle="Add Staff"
      />
      {/* Table Actions */}
      {/* Export || Search || Bulk Delete */}
      <TableActions />
      <div className="py-6">
        <h2>Table</h2>
      </div>
    </div>
  );
}
