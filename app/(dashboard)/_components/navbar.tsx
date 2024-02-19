"use client";

import { UserButton } from "@clerk/nextjs";

export const NavBar = () => {
    return (
        <div className="flex items-center gap-x-4 p-5 bg-green-500">
            <UserButton/>
        </div>
    )
}