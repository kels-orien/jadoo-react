
import { FC, useEffect, useRef } from 'react'
import Portal from '@reach/portal'
import s from './Dropdown.module.css'


interface Props {
    open: boolean
    onClose: () => void
}
const Dropdown: FC<Props> = ({ children, open =false, onClose}) => {
    return (
        <Portal>
            { open ? (<div className={s.root}>
                <nav className="flex justify-center top-0 h-auto pb-3">
                    <ul className="">
                        <li className="p-1 pt-2"><a href="#" className="max-w-full">Destinations</a></li>
                        <li className="p-1"><a href="#" className="">Hotels</a></li>
                        <li className="p-1"><a href="#" className="">Flights</a></li>
                        <li className="p-1"><a href="#" className="">Bookings</a></li>
                        <li className="p-1"><a href="#" className="">Login</a></li>
                        <li className="p-1"><a href="#" className="">Sign up</a></li>
                    </ul>  
                </nav>
            </div>) : null}

        </Portal>

    )
}

export default Dropdown
