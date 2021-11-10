import { FC } from 'react'
import cn from 'classnames'
import s from './Navbar.module.css'
import Link from 'next/link'
import { Jadoo } from '../icons'
import MobileNavbar from '../MobileNavbar'
import { useTranslation } from 'react-i18next'
const Navbar:FC = () => {
    const { t } = useTranslation()
    return (
        <div className={cn(s.root)}>
            <div className="flex justify-start items-start cursor">
                <a href="#" title="icon link"><Jadoo/></a>
            </div>

            <div className="flex items-end justify-end">
                
                <MobileNavbar/>
                <ul className="flex w-full md2:hidden">
                    <Link href="/"><a className={s.link}>Destinations</a></Link>
                    <Link href="/"><a className={s.link}>Hotels</a></Link>
                    <Link href="/"><a className={s.link}>Flights</a></Link>
                     <Link href="/"><a className={s.link}>Bookings</a></Link>
                    <Link href="/"><a className={s.link}>Login</a></Link>
                    <Link href="/"><a className={s.button}>Sign up</a></Link>
                    <Link href="/"><a className={s.link}>EN <div className="relative pl-1 pt-1">
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.5 0.5L5 5L9.5 0.5" stroke="#212832" />
                    </svg>
                        </div>
                    </a></Link>
                    
                </ul>
            </div>

        </div>
    )
}

export default Navbar
