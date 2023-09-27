import logo from '../assets/logo.svg'
import arrowDown from '../assets/icon-arrow-down.svg'
import arrowUp from '../assets/icon-arrow-up.svg'
import menuIcon from '../assets/icon-menu.svg'
import closeMenuIcon from '../assets/icon-close-menu.svg'
import todoIcon from '../assets/icon-todo.svg'
import calendarIcon from '../assets/icon-calendar.svg'
import reminderIcon from '../assets/icon-reminders.svg'
import planningIcon from '../assets/icon-planning.svg'
import { useState } from 'react'

export default function Navigation () {
    const [openFeatures, setOpenFeatures] = useState(false)
    const [openCompany, setOpenCompany] = useState(false)

    const handleOpenMenu = () => {
        const navbar = document.querySelector('.navbar')
        const menuButton = document.querySelector('.menu-button')

        navbar.classList.toggle("open")
        if (navbar.classList.contains('open')) {
            menuButton.src = closeMenuIcon
        } else {
            menuButton.src = menuIcon
        }
    }

    return (
        <>
        <header className='p-5 flex items-center justify-between'>
            <div className='md:flex md:items-start md:justify-start'>
                <img src={logo} className='md:mr-10' alt="logo" />
                <nav className='navbar'>
                    <div className='mb-2 md:mb-0 md:mr-8'>
                        <button 
                            onClick={() => setOpenFeatures(!openFeatures)} 
                            className='flex items-center justify-start text-medium-gray hover:text-almost-black'>
                            Features 
                            {openFeatures 
                                ? <img className='ml-2' src={arrowUp} alt="" /> 
                                : <img className='ml-2' src={arrowDown} alt="" />
                            }
                        </button>
                        {openFeatures && 
                        <ul className='mt-2 ml-3 md:ml-0 md:p-3 md:shadow features-menu'>
                            <li className='flex items-center justify-start text-sm mb-2'>
                                <img src={todoIcon} className='mr-2' alt="" />Todo List
                            </li>
                            <li className='flex items-center justify-start text-sm mb-2'>
                                <img src={calendarIcon} className='mr-2' alt="" />Calendar
                            </li>
                            <li className='flex items-center justify-start text-sm mb-2'>
                                <img src={reminderIcon} className='mr-2' alt="" />Reminders
                            </li>
                            <li className='flex items-center justify-start text-sm mb-2'>
                                <img src={planningIcon} className='mr-2' alt="" />Planning
                            </li>
                        </ul>}
                    </div>

                    <div className='mb-2 md:mb-0 md:mr-8'>
                        <button 
                            onClick={() => setOpenCompany(!openCompany)} 
                            className='flex items-center justify-start text-medium-gray hover:text-almost-black'>
                            Company 
                            {openCompany 
                                ? <img className='ml-2' src={arrowUp} alt="" /> 
                                : <img className='ml-2' src={arrowDown} alt="" />
                            }
                        </button>
                        {openCompany && 
                        <ul className='mt-2 ml-3 md:ml-0 md:p-3 md:shadow company-menu'>
                            <li className='flex items-center justify-start text-sm mb-2'>
                                History
                            </li>
                            <li className='flex items-center justify-start text-sm mb-2'>
                                Our Team
                            </li>
                            <li className='flex items-center justify-start text-sm mb-2'>
                                Blog
                            </li>
                        </ul>}
                    </div>
                    
                    <div className='mb-2 md:mr-8 md:mb-0 text-medium-gray hover:text-almost-black'>
                        <button>Careers</button>
                    </div>

                    <div className='text-medium-gray hover:text-almost-black'>
                        <button>About</button>
                    </div>
                </nav>
            </div>

            <div className='md:hidden close-btn'>
                <button onClick={handleOpenMenu}>
                    <img src={menuIcon} className='menu-button' alt="" />
                </button>
            </div>

            <div className='hidden md:block'>
                <button className='mr-10 text-medium-gray hover:text-almost-black'>Login</button>
                <button className='border-2 border-medium-gray rounded-xl 
                    px-5 py-2 text-medium-gray hover:border-almost-black hover:text-almost-black'>
                    Register
                </button>
            </div>
        </header>
        </>
    )
}