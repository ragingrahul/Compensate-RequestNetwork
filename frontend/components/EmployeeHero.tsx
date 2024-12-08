import React, { useEffect, useState } from 'react'
import { GridBackground } from './aceternityUi/GridBackground'
import { Spotlight } from './aceternityUi/Spotlight'
import EmployeeCardDetails from './EmployeeCardDetails'
import { Employee } from '@/state/types'
import { SalaryChart } from './SalaryChart'
import { BarChartCard } from './BarChartCard'
import EmployerTimeline from './EmployerTimeline'
import { fetchEmployee } from '@/services/read-services'
import { useAppKitAccount } from '@reown/appkit/react'
import { payments } from '@/data'

const EmployeeHero = () => {
    const { address, isConnected } = useAppKitAccount()
    const [employeeInfo, setEmployeeInfo] = useState<Employee>()
    const totalAmount = 1;
    useEffect(() => {
        if(address && isConnected) {
            fetchEmployee(address as `0x${string}`)
            .then(data => {setEmployeeInfo(data); console.log(data)})
        }
    }, [address])

    if (!employeeInfo) {
        return 
    }

    return (
        <div className='pb-20 pt-10 w-full'>
            <div className="absolute pointer-events-none inset-0 w-full h-[110vh] flex items-start justify-start bg-custom-image bg-cover [mask-image:radial-gradient(ellipse_at_center,transparent_1%,black)]"></div>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='pink' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <div className={`grid grid-cols-3 gap-10 md:gap-2 max-w-7xl mx-auto `}>
                <div className='col-span-2'>
                   {employeeInfo && <EmployeeCardDetails employee={employeeInfo} totalPayment={totalAmount} />} 
                </div>
                {/* <div className='col-span-1 h-full'> */}
                <SalaryChart />
                {/* </div> */}

            </div>
            <div className={`grid grid-cols-3 gap-10 md:gap-2 max-w-7xl mx-auto `}>
                <div className='col-span-1'>
                    <BarChartCard />
                </div>
                <div className='col-span-2'>
                    <EmployerTimeline address='0x1jewfb385' event={payments}/>
                </div>
            </div>

        </div>
    )
}

export default EmployeeHero