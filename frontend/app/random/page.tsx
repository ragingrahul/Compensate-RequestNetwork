"use client"


import { Navbar } from '@/components/Navbar'
import React, { useEffect, useState } from 'react'
import EmployerHero from '@/components/EmployerHero';
import { RxAvatar } from "react-icons/rx";
import { setOrganization } from "@/state/app";
import { useAppDispatch, useAppSelector } from "@/state/hooks";
import { selectOrganization, selectRole, selectConnection } from "@/state/selectors";


const Employer = () => {
  const dispatch = useAppDispatch();
  const connection = useAppSelector(selectConnection);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // const {account, connected}=useWallet();
  // const role = useAppSelector(selectRole);
  //const org = useAppSelector(selectOrganization);
  // const isEmployer = role === 'employer'

  // useEffect(() => {
  //   async function fetchData() {
  //     if (!connected){
  //       // window.location.href = '/'
  //       console.log(connected,account?.address)
  //     }
  //   }
  //   fetchData()
  // }, [account?.address, dispatch])

  //console.log('org', org)

  if (!isMounted) {
    return null; // or a loader/spinner
  }


  return (
    <main className='relative bg-purple-200 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5'>
      <div className='max-w-7xl w-full'>
        <Navbar
          title='Disconnect'
          icon={<RxAvatar />}
          position='left'
        />
        {connection && <EmployerHero address={connection?.userAddress} />}
      </div>
    </main>
  )
}

export default Employer