import React from "react";
import PageHeader from "@/app/components/backoffice/PageHeader";
import TableActions from "@/app/components/backoffice/TableActions";

export default function Marketplace() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Marketplace"
        href="/dashboard/marketplace/new"
        linkTitle="Add Marketplace"
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
