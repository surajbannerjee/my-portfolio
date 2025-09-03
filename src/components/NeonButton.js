import { Icon } from '@iconify/react'
import Link from 'next/link'
import React from 'react'

const NeonButton = ({ btnText, href, icon }) => {
    return (
        <div className="neonBtn w-full">
            <Link className='flex items-center justify-center text-center gap-2 px-[2rem] py-[1.2rem] font-medium text-[2rem] leading-[1.2] w-full' href={href}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                {/* icon  */}
                <div className='flex items-center justify-center text-center gap-2'>
                    <Icon icon={icon} />
                    {btnText}
                </div>

            </Link>
        </div>
    )
}

export default NeonButton