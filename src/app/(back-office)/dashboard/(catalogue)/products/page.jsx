import React from "react";
import PageHeader from "@/app/components/backoffice/PageHeader";
import TableActions from "@/app/components/backoffice/TableActions";

export default function page() {
  return (
    <div>
      {/* Header */}
      <PageHeader
        heading="Products"
        href="/dashboard/products/new"
        linkTitle="Add Product"
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
