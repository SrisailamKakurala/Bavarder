"use client"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import UserAvatar from "../common/UserAvatar"
import React, { Suspense, useState } from "react"
import dynamic from "next/dynamic"
const LogoutModal = dynamic(() => import("./LogoutModal"))

const ProfileMenu = ({name, image}: {name: string, image?: string}) => {
    const [logOutOpen, setLogOutOpen] = useState(false);

  return (
    <div>
        {logOutOpen && <Suspense fallback={<div>Loading...</div>}>
            <LogoutModal open={logOutOpen} setOpen={setLogOutOpen} />
        </Suspense>}
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar name={name} image={image} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLogOutOpen(true)}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    </div>
  )
}

export default ProfileMenu