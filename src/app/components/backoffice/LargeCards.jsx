import React from "react";
import LargeCard from "./LargeCard";

export default function LargeCards() {
  const orderStats = [{
    period: "Today Orders",
    sales: 110,
    color: "bg-green-600",
  },{
    period: "Yesterday Orders",
    sales: 130,
    color: "bg-blue-600",
  },{
    period: "This month",
    sales: 110,
    color: "bg-yellow-600",
  },{
    period: "All time sales",
    sales: 110,
    color: "bg-purple-600",
  },
];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {
        orderStats.map((item,i)=>{
            return(
                <LargeCard className="bg-green-600" data={item} key={i} />
            )
        })
      }
    </div>
  );
}
