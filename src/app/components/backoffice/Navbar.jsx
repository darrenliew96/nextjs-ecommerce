import React from "react";
import { Sun, Bell, User, AlignJustify, X } from "lucide-react";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { LayoutGrid, Settings, LogOut } from "lucide-react";
import ThemeSwitcherBtn from "../ThemeSwitcherBtn";

export default function Navbar({setShowSidebar, showSidebar}) {
  return (
    <div className="flex items-center justify-between bg-white dark:bg-slate-800 text-slate-50 h-20 px-8 lg:pr-[20rem] py-4 fixed top-0 w-full z-50 shadow">
      {/* Icon */}
      <button onClick={()=> setShowSidebar(!showSidebar)}>
        <AlignJustify className="text-lime-700 dark:text-slate-50" />
      </button>
      {/* 3 Icons */}
      <div className="flex space-x-3">
        <ThemeSwitcherBtn/>
        
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button
              type="button"
              className="relative inline-flex items-center p-3 text-sm font-medium text-center text-white bg-transparent rounded-lg"
            >
              <Bell className="text-lime-700 dark:text-slate-50" />
              <span className="sr-only">Notifications</span>
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 rounded-full -top-0 -start-0 dark:border-gray-900">
                20
              </div>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-8">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpeg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.1 bg-red-700 text-white rounded-full text-sm">
                      Stock Out
                    </p>
                    <p>2014-05-06</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <div className="flex items-center space-x-2">
                <Image
                  src="/profile.jpeg"
                  alt="User Profile"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full"
                />
                <div className="flex flex-col space-y-1">
                  <p>Yellow Sweet Corn</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-3 py-0.1 bg-red-700 text-white rounded-full text-sm">
                      Stock Out
                    </p>
                    <p>2014-05-06</p>
                  </div>
                </div>
                <button>
                  <X />
                </button>
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="/profile.jpeg"
              alt="User Profile"
              width={200}
              height={200}
              className="w-8 h-8 rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="py-2 px-4 pr-8">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LayoutGrid className="mr-2 h-4 w-4" />
                <span>Dashboard</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <Settings className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
              </button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <button className="flex items-center space-x-2">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
