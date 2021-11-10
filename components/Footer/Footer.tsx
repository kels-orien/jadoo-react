
import { FC } from 'react'
import { AppleStore, Facebook, GoogleStore, Instagram, Jado, Twitter } from "../icons"

const Footer: FC = () => {
    return (
        <footer className="p-24 m-auto w-3/4 xl:w-full">
            <div className="flex self-center justify-between flex-wrap md:block md:m-auto md:text-center">
                <div className="block w-1/5 pt-2  md:w-full">
                    <div className="md:flex md:justify-center"><Jado /></div>
                
                    <p className="relative text-xs pt-4">
                        Book your trip in minutes, get full control for much longer.
                    </p>
                </div>
                <div className="block pt-2">
                    <div className="pb-4"><h1 className="font-bold">Company</h1></div>
                    <ul>
                        <li className ="pb-1">
                           <a href="#">About</a>
                        </li>
                        <li className ="pb-1">
                        <a href="#">Careers</a> 
                        </li>
                        <li className ="pb-1">
                        <a href="#">Mobile</a> 
                        </li>
                    </ul>
                </div>
                <div className="block pt-2">
                    <div className="pb-4"><h1 className="font-bold">Contact</h1></div>
                    <ul>
                        <li className ="pb-1">
                        <a href="#">Help/FAQ</a> 
                        </li>
                        <li className ="pb-1">
                           <a href="#"> Press</a> 
                        </li>
                        <li className ="pb-1">
                            <a href="#">Affiliates</a> 
                        </li>
                    </ul>
                </div>
                <div className="block pt-2">
                    <div className="pb-4"><h1 className="font-bold">More</h1></div>
                    <ul>
                        <li className ="pb-1">
                            <a href="#">Airlinefees</a> 
                        </li>
                        <li className ="pb-1">
                            <a href="#">Airline</a> 
                        </li>
                        <li className ="pb-1">
                            <a href="#">low fare tips</a> 
                        </li>
                    </ul>
                </div>
                <div className="block md:m-auto">

                    <div className="flex justify-between">
                        <a href="https://facebook.com"><Facebook /></a>
                        <a href="https://instagram.com" className="pt-3"><Instagram /></a>
                        <a href="https://twitter.com"><Twitter /></a>

                    </div>
                    <div className="flex pl-4 pb-1">Discover our app</div>
                    <div className="flex justify-between w-full ">
                        <a href="#" className="pr-4">
                            <GoogleStore/>
                        </a>
                        <a className="pr-4">
                            <AppleStore/>
                        </a>
                        
                    </div>
                </div>

            </div>
            <div className="text-center pt-16">
                All rights reserved@jadoo.co
            </div>
        </footer>
    )
}

export default Footer
