"use client"

import EmployeeHero from '@/components/EmployeeHero'
import EmployerHero from '@/components/EmployerHero'
import { Navbar } from '@/components/Navbar'
import { fetchEmployee } from '@/services/read-services'
import { useAppDispatch, useAppSelector } from '@/state/hooks'
import { selectRole } from '@/state/selectors'
import { useAppKitAccount } from '@reown/appkit/react'

import React, { useEffect } from 'react'
import { IoMdLogOut } from 'react-icons/io'

const Employee = () => {
  const dispatch = useAppDispatch()
  // const {account, connected}=useWallet();
  const role = useAppSelector(selectRole);
  const { address, isConnected } = useAppKitAccount()
  //const org = useAppSelector(selectOrganization);
  // const isEmployer = role === 'employer'

  // useEffect(() => {
  //   async function fetchData() {
  //     if (isConnected && address){
  //       // window.location.href = '/'
  //       const emp = await fetchEmployee(address as `0x${string}`)
  //       dispatch(setEmpl(emp))
  //       console.log(emp)
  //     }
  //   }
  //   fetchData()
  // }, [address, dispatch])

  //console.log('org', org)
  return (
    <div className='w-full h-fit'>
        <Navbar 
          title='Disconnect' 
          icon={<IoMdLogOut />}
          position='left' 
        />
        <EmployeeHero />
    </div>
  )
}

export default Employee