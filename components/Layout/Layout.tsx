import { FC } from 'react'
import Navbar from '../Navbar'
import s from './Layout.module.css'
import cn from 'classnames'
import Image from 'next/image'
import Footer from '../Footer'
import { Satellite, Aeroplane, Microphone, Customization, 
    Navigation, Leaf, Map, Send, Building, Heart, Group1, Group2, Group3, Dots, Email, PlayButton } from '../icons'
import RomePix from '../../assets/img/rome.png'
import LondonPix from '../../assets/img/london.jpg'
import VacationPix from '../../assets/img/vacation.jpg'
import EuropePix from '../../assets/img/europe.png'
import TravellerPix from '../../assets/img/traveller1.png'
import AxonPix from '../../assets/img/axon.png'
import JetStarPix from '../../assets/img/jetstar.png'
import ExpediaPix from '../../assets/img/expedia.png'
import QantasPix from '../../assets/img/qantas.png'
import AlitaliaPix from '../../assets/img/alitalia.png'
import { NextPage} from 'next'


const Layout: NextPage = ({ children }) => {

   

    return (
        <div className={cn(s.root)}>
            <Navbar />
            {children}
           
            <section className="w-full m-auto">
                <div className="flex md2:block  justify-center">
                    <div className="block pl-8 pt-36 md2:text-center md2:pt-8 pb-8 pr-8">
                        <div className="block">
                            <h1 className={s.topFont}>best destinations around the world</h1>
                        </div>
                        <div className="block">
                            <p className={s.largeFont}>Travel, enjoy</p>
                            <p className={s.largeFont}> and live a new </p>
                            <p className={s.largeFont}> and full life.</p>
                        </div>
                        <div className="block pt-4">
                            <p>Built Wicket longer admire do barton vanity itself do in it,</p>
                            <p>Preferred ro sportsmen it engrossed listening. Park gate</p>
                            <p>sell they west hard for the.</p>
                        </div>
                        <div className="flex pt-8 md2:justify-center">
                            <div className="block"><button className={s.findButton}>Find out more</button></div>
                            <div className="flex justify-between pl-4 ">
                                <button className={s.playbutton}><PlayButton /></button>

                                <div className="pl-2 text-sm pt-3">
                                    Play Demo
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="block">

                        < Image src={TravellerPix} alt="Traveller" />
                    </div>
                </div>

            </section>
            <main className="m-auto w-full pb-8">
                <div className="flex justify-center">
                    <header className={s.font1}><h1>CATEGORY</h1></header>

                </div>
                <div className={s.headerText}><h1>We Offer Best Services</h1></div>
                <div className="flex justify-center pt-4 pb-24 ">
                    <div className="flex flex-row justify-between w-3/4 flex-wrap sm:justify-center">
                        <div className={s.col}>
                            <div className="flex justify-center">
                                <Satellite />
                            </div>
                            <div className="flex justify-center">
                                <h3 className={s.midText}>Calculated Weather</h3>
                            </div>
                            <div className="flex justify-center pt-1 pl-2 pr-2">
                                <p className={s.paragraphText}>Built Wicket longer admire do barton vanity itself do on it</p>
                            </div>
                        </div>
                        <div className={s.col}>
                            <div className="flex justify-center">
                                <Aeroplane />
                            </div>
                            <div className="flex justify-center">
                                <h3 className={s.midText}>Best Flights</h3>
                            </div>
                            <div className="flex justify-center pt-1 pl-2 pr-2">
                                <p className={s.paragraphText}>Engrossed listening. Park gate sell they west hard for the.</p>
                            </div>
                        </div>
                        <div className={s.col}>
                            <div className="flex justify-center">
                                <Microphone />
                            </div>
                            <div className="flex justify-center">
                                <h3 className={s.midText}>Local Events</h3>
                            </div>
                            <div className="flex justify-center pt-1 pl-2 pr-2">
                                <p className={s.paragraphText}>Barton vanity itself do in it. Preferred to men it engrossed listening</p>
                            </div>
                        </div>
                        <div className={s.col}>
                            <div className="flex justify-center">
                                <Customization />
                            </div>
                            <div className="flex justify-center">
                                <h3 className={s.midText}>Customization</h3>
                            </div>
                            <div className="flex justify-center pt-1 pl-2 pr-2">
                                <p className={s.paragraphText}>We deliver outsourced aviation services for military customers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <header className={s.font1}><h1>Top Selling</h1></header>
                </div>
                <div className={s.headerText}><h1>Top Destinations</h1></div>
                <div className="flex justify-center">
                    <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 mb-2 w-full">
                        <div className={s.col2}>
                            <div className="flex justify-center">
                                < Image src={RomePix} width={230} height={200} alt="rome" className={s.image} />
                            </div>
                            <div className="flex justify-between pt-4 pl-2 pr-2">
                                <div className="flex">Rome, Italy</div><div className="flex">$5.42k</div>
                            </div>
                            <div className="flex pt-1 pr-2">
                                <div className="flex pt-1 pl-2 pr-2"><Navigation /></div><div className="flex">10 Days trip</div>
                            </div>
                        </div>
                        <div className={s.col2}>
                            <div className="flex justify-center">
                                < Image src={LondonPix} width={230} height={200} alt="london" className={s.image} />
                            </div>
                            <div className="flex justify-between pt-4 pl-2 pr-2">
                                <div className="flex">London, UK</div><div className="flex">$4.2k</div>
                            </div>
                            <div className="flex pt-1 pr-2">
                                <div className="flex pt-1 pl-2 pr-2"><Navigation /></div><div className="flex">12 Days trip</div>
                            </div>
                        </div>
                        <div className={s.col2}>
                            <div className="flex justify-center">
                                <Image src={EuropePix} width={230} height={200} alt="rome" className={s.image} />
                            </div>
                            <div className="flex justify-between pt-4 pl-2 pr-2">
                                <div className="flex">Full Europe</div><div className="flex">$15k</div>
                            </div>
                            <div className="flex pt-1 pr-2">
                                <div className="flex pt-1 pl-2 pr-2"><Navigation /></div><div className="flex">28 Days trip</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap items-center justify-center mt-6 mb-2">
                    <div className={s.bookCol}>
                        <div className="block pr-12 sm:pr-0">
                            <header className={s.font1}><h1>Easy and Fast</h1></header>
                            <div className={s.width1}><h1 className={s.headerText2}>Book Your Next Trip in 3 Easy Steps</h1></div>
                            <div className="flex sm:justify-center">
                                <div className="pr-4 pb-8">
                                    <Group1 />
                                </div>
                                <div className="inline">
                                    <h1>Choose Destination</h1>
                                    <p>Choose your destination and start planning your trip</p>
                                </div>
                            </div>
                            <div className="flex sm:justify-center">
                                <div className="pr-4 pb-8">
                                    <Group2 />
                                </div>
                                <div className="inline">
                                    <h1>Make Payment</h1>
                                    <p>Choose your destination and start planning your trip</p>
                                </div>
                            </div>
                            <div className="flex sm:justify-center">
                                <div className="pr-4">
                                    <Group3 />
                                </div>
                                <div className="inline">
                                    <h1>Reach Airport on Selected Date</h1>
                                    <p>Choose your destination and start planning your trip</p>
                                </div>
                            </div>
                        </div>
                        <div className="block pt-16 sm:flex sm:justify-center">
                            <div className={s.col3}>
                                <Image src={VacationPix} width={230} height={100} alt="vacation" />
                                <div className="flex font-semibold">
                                    Trip to Greece
                                </div>
                                <div className="block">
                                    14-29 June | By Robin Junior
                                </div>
                                <div className={s.optionsCol}>
                                    <div className="block">
                                        <Leaf />
                                    </div>
                                    <div className="block">
                                        <Map />
                                    </div>
                                    <div className="block">
                                        <Send />
                                    </div>
                                </div>
                                <div className="flex pt-4 justify-between">
                                    <div className="flex">
                                        <Building />
                                        <div className="block pl-2">24 people going</div>
                                    </div>
                                    <div className="block">
                                        <Heart />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.commentSection}>

                    <div className={s.commentSecondary}>
                        <div className="block w-3/6 md2:w-full">

                            <div className="block pr-8">
                                <header className={s.font1}><h1 className="md2:text-center">TESTIMONIALS</h1></header>
                                <h1 className={s.headerText2}>What People Say About Us.</h1>
                            </div>
                            <Dots />
                        </div>
                        <img src={"/img/profile.jpg"} alt="profile pix" className={s.bookImage} />

                        <div className="relative">
                            <div className={s.commentBox}>

                                <p className="p-6">"On the Windows talking painted pasture yet it's express parties use.
                                    Sure last upon the same as knew next. Of believed or diverted no"</p>

                                <p className='pt-6 pl-6'>Mike Taylor</p>
                                <p className="pt-1 pl-6">Lahore,Pakistan</p>
                            </div>

                        </div>

                    </div>

                </div>

            </main>
            <section className="m-auto pt-8 pl-16 pr-16">
                <div className="flex justify-between flex-wrap">
                    <div className="relative">
                        <Image src={AxonPix} alt="Axon Icon" />
                    </div>
                    <div className="relative pt-16">
                        <Image src={JetStarPix} alt="Jetstar Icon" />
                    </div>
                    <div className="relative pt-12">
                        <Image src={ExpediaPix} alt="Expedia Icon" />
                    </div>
                    <div className="relative pt-28">
                        <Image src={QantasPix} alt="Qantas Icon" />
                    </div>

                    <div className="relative pl-2 pt-32 sm:pb-8">
                        <Image src={AlitaliaPix} alt="Alitalia Icon" />
                    </div>

                </div>
            </section>
            <section className={s.subscribe}>
                <div className="m-auto block">
                    <div className="text-center pt-20 mb-12">
                        <p className="text-3xl font-bold md2:text-xl sm:p-4">Subscribe to get information, latest news and other </p>
                        <p className="text-3xl font-bold md2:text-xl">interesting offers about Cobham</p>
                    </div>
                    <div className="flex justify-center align-middle">
                        <form className="w-auto flex sm:block justify-between">
                            <div className="mb-4 flex sm:block">
                                <div className={s.textboxPrimary}>
                                    <div className={s.textboxSecondary}>
                                        <div className={s.textboxTertiary}>
                                            <div className={s.textboxInner}>
                                                <div className={s.textboxIcon}>

                                                    <Email />
                                                </div>
                                                <input type='text' id="email" className={s.input} />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <div className="p4 sm:pt-4">
                                    <button className={s.subscribeButton}>Subscribe</button>
                                </div>
                            </div>


                        </form>

                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}



export default Layout
