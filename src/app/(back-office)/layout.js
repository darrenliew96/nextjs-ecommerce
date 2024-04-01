import React from "react";
import Sidebar from "../components/backoffice/Sidebar";
import Navbar from "../components/backoffice/Navbar";

export default function Layout({children}) {
    return (
        <div className="flex">
        {/*sidebar */}
        <div>
            <Sidebar />
        </div>
        {/*main body */}
        <div className="w-full">
            {/* header */}
            <h2><Navbar /></h2>
            <main className="p-8 bg-slate-900 text-slate-50 min-h-screen  ml-60 mt-16">{children}</main>
        </div>
        
        </div>
    )
}