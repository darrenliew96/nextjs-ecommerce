"use client";
import React from "react";
import Link from "next/link";
import {
  Image,
  LayoutGrid,
  ListOrdered,
  LogOut,
  Settings,
  Slack,
  Store,
  Truck,
  Users2,
} from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const sidebarLinks = [
    {
      title: "Dashboard",
      icon: LayoutGrid,
      href: "/dashboard",
    },
    {
      title: "Catalogue",
      icon: ListOrdered,
      href: "/dashboard/catalogue",
    },
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },
    {
      title: "Staffs",
      icon: Slack,
      href: "/dashboard/staffs",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: Store,
      href: "/",
    },
  ];
  return (
    <div className="dark:bg-slate-700 dark:text-slate-50 shadow-md space-y-6 w-64 h-screen  fixed left-0 top-0">
      <Link className="" href="#">
        <Image alt="logo" className="w-36" />
      </Link>
      <div className="space-y-3 flex flex-col mt-14 ">
        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              key={i}
              href={item.href}
              className={
                item.href == pathname
                  ? "flex items-center space-x-3 px-6 py-2 border-green-600 border-l-8 text-green-500"
                  : "flex items-center space-x-3 px-6 py-2 "
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="p-4">
          <button className="flex items-center space-x-3 px-6 py-3 bg-red-500 rounded-md text-slate-50 ">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
