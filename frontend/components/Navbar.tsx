"use client";
import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { ShimmerButton } from "./aceternityUi/ShimmerButton";
import ConnectButton from "./aceternityUi/connect-button";



type Props ={
    className?: string
    title: string 
    icon: React.ReactNode
    position: string
    handleClick?: () => void
}

export function Navbar(props: Props) {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const openWalletDialog = () => {
      setIsDialogOpen(true);
    };
  
    const closeWalletDialog = () => {
      setIsDialogOpen(false);
    };
    return (
        <div
            className={cn("absolute top-10 inset-x-0 max-w-7xl mx-auto z-50 w-full flex items-center justify-center", props.className)}
        >
            <div className="flex justify-between items-center w-full">
                <img
                    src="/logo2.png"
                    alt="logo"
                    className="w-[240px] h-[40px]"
                />
                <ShimmerButton
                    title={props.title}
                    icon={props.icon}
                    position={props.position}
                    // otherClasses="w-48"
                    openWalletDialog={openWalletDialog}
                />
            </div>
        </div>
    );
}
