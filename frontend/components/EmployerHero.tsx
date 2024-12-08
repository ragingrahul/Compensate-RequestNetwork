import React from 'react'
import { GridBackground } from './aceternityUi/GridBackground'
import EmployerGraphs from './EmployerGraphs'
import { Spotlight } from './aceternityUi/Spotlight'
import EmployerTimeline from './EmployerTimeline'
import { Address } from '@/state/types'
import { EmployerBento } from './EmployerBento'
import { events } from '@/data'

type AddressProp = {
    address: Address
}
const EmployerHero = ({address}:AddressProp) => {
    return (
        <div className='pb-20 pt-10 h-100vh'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='pink' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
            </div>
            <GridBackground />
            <EmployerBento />
            <EmployerGraphs address={address}/>
            <EmployerTimeline address={address} event={events}/> 
        </div>
    )
}

export default EmployerHero