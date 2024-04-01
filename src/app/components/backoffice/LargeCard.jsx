import React from "react";
import { Layers } from "lucide-react"

export default function LargeCard({data}) {
  return (
    <div className={`rounded-lg text-white shadow-sm p-8 flex items-center flex-col gap-2 py-8 ${data.color}`}>
      <Layers />
      <h4>{data.period}</h4>
      <h2 className="lg:text-3xl text-2xl">SGD.{data.sales}</h2>
    </div>
  );
}
