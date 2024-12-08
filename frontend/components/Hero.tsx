import React, { useState } from 'react'
import { Spotlight } from './aceternityUi/Spotlight'
import { GridBackground } from './aceternityUi/GridBackground'
import { TextGenerateEffect } from './aceternityUi/TextGenerateEffect'
import {Roboto_Mono} from '@next/font/google'

const roboto = Roboto_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700',]
})


const Hero = () => {

    return (
        <div className='pb-5 pt-36'>
            <div>
                <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
                <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
                <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='pink' />
            </div>
            <GridBackground />
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <h2 className={`uppercase tracking-widest text-xs text-center text-blue-100 max-w-100 ${roboto.className}`}>
                        Streamlining payroll with precision and ease.
                    </h2>
                    <TextGenerateEffect
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Effortless Zero Knowledge Payroll for Happier, Thriving Teams!'
                    />
                    <p className={`text-center mb-4 md:text-lg lg:text-xl text-blue-100 ${roboto.className}`}>
                        Transforming payroll processes for clarity and employee satisfaction!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Hero