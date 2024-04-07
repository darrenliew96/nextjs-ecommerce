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
        <div className="lg:ml-64 ml-0 flex-grow bg-slate-100 min-h-screen">
            {/* header */}
            <h2><Navbar /></h2>
            <main className="p-8 bg-slate-100 dark:bg-slate-900 text-slate-50 min-h-screen mt-16">{children}</main>
        </div>
        
        </div>
    )
}