import React from "react";
import SmallCard from "./SmallCard";
import { ShoppingCart, CheckCheck, RefreshCcw, Loader2 } from "lucide-react";

export default function SmallCards() {
  const orderStatus = [
    {
      title: "Today Orders",
      numbers: 110,
      iconBg: "bg-green-600",
      icon: ShoppingCart,
    },
    {
      title: "Orders pending",
      numbers: 130,
      iconBg: "bg-blue-600",
      icon: Loader2,
    },
    {
      title: "Order Processing",
      numbers: 110,
      iconBg: "bg-yellow-600",
      icon: RefreshCcw,
    },
    {
      title: "Orders Delivered",
      numbers: 110,
      iconBg: "bg-purple-600",
      icon: CheckCheck,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((data, i) => {
        return <SmallCard data={data} key={i} />;
      })}
    </div>
  );
}
