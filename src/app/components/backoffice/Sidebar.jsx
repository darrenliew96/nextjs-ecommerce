"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Boxes,
  ChevronRight,
  Image,
  LayoutGrid,
  ListOrdered,
  LogOut,
  Settings,
  Slack,
  Store,
  Truck,
  Users2,
  LayoutList,
  SendToBack,
  ScanSearch,
  MonitorPlay,
  ChevronDown,
  ShoppingBasket,
  User,
} from "lucide-react";
import { usePathname } from "next/navigation";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(false);

  const sidebarLinks = [
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },
    {
      title: "Marketplace",
      icon: ShoppingBasket,
      href: "/dashboard/marketplace",
    },
    {
      title: "Agents",
      icon: User,
      href: "/dashboard/agents",
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
  const catalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Attributes",
      icon: SendToBack,
      href: "/dashboard/attributes",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Store Banner",
      icon: MonitorPlay,
      href: "/dashboard/banners",
    },
  ];
  return (
    <div
      className={
        showSidebar
          ? " sm:block mt-20 sm:mt-0 dark:bg-slate-700 dark:text-slate-50 shadow-md space-y-6 w-64 h-screen  fixed left-0 top-0 overflow-y-scroll"
          : "hidden sm:block mt-20 sm:mt-0 dark:bg-slate-700 dark:text-slate-50 shadow-md space-y-6 w-64 h-screen  fixed left-0 top-0 overflow-y-scroll"
      }
    >
      <Link className="" href="#">
        <Image alt="logo" className="w-36" />
      </Link>

      <div className="space-y-3 flex flex-col mt-14 ">
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className={
            "/dashboard" == pathname
              ? "flex items-center space-x-3 px-6 py-2 border-green-600 border-l-8 text-green-500"
              : "flex items-center space-x-3 px-6 py-2 "
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Collapsible className="px-6 py-2 ">
          <CollapsibleTrigger
            className=""
            onClick={() => setOpenMenu(!openMenu)}
          >
            <button className="flex items-center space-x-6 py-2 ">
              <div className="flex items-center space-x-3">
                <ListOrdered />
                <span>Catalogue</span>
              </div>
              {openMenu ? <ChevronDown /> : <ChevronRight />}
            </button>
          </CollapsibleTrigger>
          <CollapsibleContent className="px-3 bg-slate-200 dark:bg-slate-600 rounded-md">
            {catalogueLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSidebar(false)}
                  key={i}
                  href={item.href}
                  className={
                    item.href == pathname
                      ? "flex items-center space-x-3 px-6 py-2 border-green-600 border-l-8 text-green-500 text-sm"
                      : "flex items-center space-x-3 px-6 py-2 text-sm "
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
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
