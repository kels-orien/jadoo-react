import { MenuIcon } from "../icons"
import { FC } from 'react'
import Dropdown from '../Dropdown'
import { useUI } from '../../components/context'

const MobileNavbar:FC = () => {

    const {
        closeDropdown,
        toggleDropdown,
        displayDropdown,
    } = useUI()
    
    return (
        <div className='md2:block hidden cursor-pointer'>
            <div className="" onClick={toggleDropdown}> <MenuIcon/></div>
           <Dropdown open={displayDropdown} onClose={closeDropdown}/>
        </div>
    )
}

export default MobileNavbar
