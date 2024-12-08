import React, { useEffect, useState } from 'react'
import { Roboto_Mono } from '@next/font/google'
import {
  createWalletClient,
  custom,
} from "viem";
import { sapphire } from "viem/chains";
import { useRouter } from 'next/navigation';
import { formatAddress } from '@/utils/helper';
import { setConnection,setRole } from "@/state/app";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { selectConnection, selectRole } from "@/state/selectors";
import { useAppKit } from '@reown/appkit/react';
import { useAppKitEvents } from '@reown/appkit/react'
import { modal } from '@/context';
import { useDisconnect } from 'wagmi'
import { useAppKitAccount } from "@reown/appkit/react";




const roboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700',]
})

type Props = {
  title: string
  icon: React.ReactNode
  position: string
  handleClick?: () => void
  otherClasses?: string
  openWalletDialog?: () => void;
}
export const ShimmerButton = ({
  title, icon, position, handleClick, otherClasses, openWalletDialog
}: Props) => {
  const router = useRouter();
  const dispatch = useAppDispatch()
  const connection = useAppSelector(selectConnection);
  const role = useAppSelector(selectRole)
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const {disconnect} = useDisconnect();
  const { address, isConnected, caipAddress, status } = useAppKitAccount()
  

  async function login(e: any){
    modal.open({view:'Connect'})
  }

  async function logout(e: React.MouseEvent) {
    // e.preventDefault();
    disconnect()
    window.location.href = '/';
  }

  useEffect(() => {
    // Redirect only if connected and address is available
    if (isConnected && address) {
      const connect = {
        connected: true,
        userAddress: address,
      };
      dispatch(setConnection(connect));
      router.push(`/${role}`);
    }
  }, [isConnected, address, dispatch, router, role]); // Include all dependencies


  console.log(connection?.userAddress)
  return (
    <div className={`relative inline-block text-center ${roboto.className}`}>
      {
        !isConnected && !address ? (
          <div>
            <button
              className={`inline-flex h-10 animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#af7eff,45%,#c1a3f2,55%,#af7eff)] bg-[length:200%_100%] px-4 gap-1 font-medium text-sm text-black transition-colors focus:outline-none focus:ring-1 focus:ring-purple-800 `}
              onClick={() => {
                if (title == 'Connect') {
                  toggleDropdown()
                }
              }}
            >
              {position === 'left' && icon}
              {title}
              {position === 'right' && icon}
            </button>
          </div>
        ) : (
          <button
            className={`inline-flex h-10 animate-shimmer items-center justify-center  border border-slate-800 bg-[linear-gradient(110deg,#af7eff,45%,#c1a3f2,55%,#af7eff)] bg-[length:200%_100%] px-4 gap-1 font-medium text-sm text-black transition-colors focus:outline-none focus:ring-1 focus:ring-purple-800 `}
            onClick={() => {
              if (title == 'Disconnect') {
                toggleDropdown()
                console.log("Here", isOpen)
              }
            }}
          >
            {position === 'left' && icon}
            {address && formatAddress(address)}
            {position === 'right' && icon}
          </button>
        )
      }

      {title === 'Connect' && isOpen && (
        <div className={`origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg ring-1 ring-black ring-opacity-5 gap-0`}>
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              className={`inline-flex w-full h-10  items-center justify-center bg-[#af7eff] px-4 gap-1 font-medium text-sm text-black transition-colors `}
              onClick={(e)=>{
                login(e)
                dispatch(setRole('employer'))
              }}
            >
              Employeer
            </button>
            <button
              className={`inline-flex w-full h-10  items-center justify-center bg-[#af7eff] px-4 gap-1 font-medium text-sm text-black transition-colors `}
              onClick={(e)=>{
                login(e)
                dispatch(setRole('employee'))
              }}
            >
              Employee
            </button>
          </div>
        </div>
      )}
      {title !=='Connect' && isOpen && (
          <div className={`origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg ring-1 ring-black ring-opacity-5 gap-0`}>
          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              className={`inline-flex w-full h-10  items-center justify-center bg-[#af7eff] px-4 gap-1 font-medium text-sm text-black transition-colors `}
              onClick={(e)=>{logout(e)}}
            >
              Logout
            </button>
          </div>
        </div>
      )}

    </div>

  )
}

