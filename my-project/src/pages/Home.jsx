import React from "react";
import myimg from '../assets/img1.png';
import myimg2 from '../assets/img2.png';
import myimg3 from '../assets/security.png';
import myimg4 from '../assets/account_box.png';
import mid1 from '../assets/mid.png';
import mid2 from '../assets/mid2.png';
import mid3 from '../assets/mid3.png';
import badge1 from '../assets/badge.png';
import badge2 from '../assets/badge1.png';
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import logo from '../assets/logo.png';
import facebook from '../assets/FacebookLogo.png';
import instagram from '../assets/InstagramLogo.png';




function Home () {
    return (
        <>
        {/*  */}
            <section className="flex mt-10 mb-10 flex-col lg:flex-row">
                <div className="flex flex-col w-full lg:pl-32 p-10 font-semibold lg:w-1/2">
                    <div>
                        <h1 className="text-4xl mb-10 text-center lg:text-left">
                            Easy Way to<br></br>
                            Save your Money<br></br>
                            with <span className="border-b-4 border-green-600 pb-0"><span className="font-bold">Atom</span>Bank</span>
                        </h1>
                    </div>
                    <p className="font-thin mb-10 text-center lg:text-left">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium aliquid nisi voluptate autem veritatis doloremque? Ipsam est doloribus reiciendis illo? Iure adipisci corporis, odit asperiores culpa et illo harum quos!
                    </p>
                    <div className="flex flex-col gap-x-5 lg:flex-row gap-y-10 lg:gap-y-0">
                        <button className="bg-black hover:bg-gray-800 text-white font-thin py-2 px-4 rounded bg-gradient-to-b from-gray-700 via-gray-800 to-gray-950">
                            Download Now
                        </button>
                        <button className="hover:text-black text-gray-800 font-thin py-2 px-4 rounded bg-transparent underline flex items-center">
                            See How it Works <ArrowRightIcon className="w-6 ml-2"></ArrowRightIcon>
                        </button>
                    </div>
                </div>
                <div className="lg:flex w-full pl-10 lg:w-1/2 justify-end hidden">
                    <img className="" src={myimg} alt=""></img>
                    <img className="absolute right-52" src={myimg2} alt=""></img>
                </div>
            </section>
            {/* dark background section */}
            <section className="bg-gradient-to-b from-gray-700 via-gray-800 to-gray-950 flex lg:m-32 m-5 my-bg rounded-3xl lg:p-20 p-10 bg-gray-800">
                <div className="flex w-full gap-x-28 flex-col lg:flex-row gap-y-10 lg:gap-y-0">
                    <div className="flex align-middle gap-x-10 lg:w-1/2 w-full flex-col lg:flex-row">
                        <div className="p-10 bg-black rounded-3xl flex justify-center shadow-2xl shadow-black">
                            <img className="" src={myimg3} alt="" width={60} height={60}/>
                        </div>
                        <div className="lg:w-3/4 w-full">
                            <h3 className="font-bold text-lg text-white lg:text-left text-center">Fast and secure cashless payment</h3>
                            <p className="text-white lg:text-left text-center">
                                Pay with AtomBank app, online, and in stores, and get added speed security
                            </p>
                        </div>
                    </div>
                    <div className="flex align-middle gap-x-10 lg:w-1/2 w-full flex-col lg:flex-row">
                        <div className="p-10 bg-black rounded-3xl flex justify-center shadow-2xl shadow-black">
                            <img src={myimg4} alt=""/>
                        </div>
                        <div className="lg:w-3/4 w-full">
                            <h3 className="font-bold text-lg text-white lg:text-left text-center">Fast and secure cashless payment</h3>
                            <p className="text-white lg:text-left text-center">
                                Your bank account lets you easily lock your card in the app. and later reorder it with a tap of a button.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="flex max-w-4xl mx-auto mb-10 flex-col lg:flex-row justify-center">
                <div className="lg:w-1/4 w-full flex justify-center">
                    <img src={mid1} alt="" />
                </div>
                <div className="lg:w-3/4 w-full p-16">
                    <h3 className="text-3xl font-semibold mb-10 text-center lg:text-left">
                        <span className="font-bold">Atom</span>Bank App For Your Easy
                    </h3>
                    <p className="text-gray-500 mb-10 text-center lg:text-left">
                        The best place to transact and save money. More organized finances
                        no longer a discourse. Enjoy the life you want, without wasting time on unnecessary financial matters
                    </p>
                    <div className="flex flex-row gap-x-10 gap-y-10 lg:gap-y-0 lg:justify-start justify-center w-full">
                        <img className="" src={badge1} alt="" width={120}/>
                        <img className="" src={badge2} alt="" width={120}/>
                    </div>
                </div>
            </section>
            <section className="flex max-w-4xl mx-auto flex-col lg:flex-row">
                <div className="lg:w-3/4 w-full p-16 lg:order-1 order-2">
                    <h3 className="text-3xl font-semibold mb-10 text-center lg:text-left">
                        <span className="font-bold">Atom</span>Bank For The Future
                    </h3>
                    <p className="text-gray-500 mb-10 text-center lg:text-left">
                        All conveniences are at hand. It is time to go ahead and make dreams come true one by one. Open, manage and withdraw competitive interest savings without going to the bank.
                    </p>
                    <div className="lg:text-left text-center">
                        {/* <a href="http://" className="underline text-green-600">Learn More<ArrowRightIcon className="m-0 h-6 w-6"></ArrowRightIcon></a> */}
                        <button className="hover:text-green-500 text-green-600 font-thin py-2 px-4 rounded bg-transparent underline flex items-center">
                            Learn More <ArrowRightIcon className="w-6 ml-2"></ArrowRightIcon>
                        </button>
                    </div>
                </div>
                <div className="lg:w-1/4 w-full lg:order-2 order-1 flex justify-center">
                    <img src={mid3} alt="" />
                </div>
            </section>
            <section className="flex max-w-4xl mx-auto mb-10 flex-col lg:flex-row">
                <div className="lg:w-1/4 w-full flex justify-center">
                    <img src={mid2} alt="" />
                </div>
                <div className="lg:w-3/4 w-full p-16">
                    <h3 className="text-3xl font-semibold mb-10 text-center lg:text-left">
                        Customizable Debit Card
                    </h3>
                    <p className="text-gray-500 mb-10 text-center lg:text-left">
                        Choose a debit card design that suits you. Practically withdraw cash and transact worldwide.
                    </p>
                    <div className="flex flex-col lg:justify-start justify-center lg:text-left text-center">
                        {/* <a href="http://" className="underline text-green-600 lg:text-left text-center">Learn More<ArrowRightIcon className="m-0 h-6 w-6">My Icon</ArrowRightIcon></a> */}
                        <button className="hover:text-green-500 text-green-600 font-thin py-2 px-4 rounded bg-transparent underline flex items-center">
                            Learn More <ArrowRightIcon className="w-6 ml-2"></ArrowRightIcon>
                        </button>
                    </div>
                </div>
            </section>
            <section className="bg-gray-100 flex-col flex justify-center lg:p-20 p-10">
                <h3 className="text-3xl font-semibold text-center p-2 lg:p-10">
                    Subscribe To Our NewsLetter
                </h3>
                <p className="text-gray-500 mb-5 text-center">
                    Financial transactions remotely using mobile
                </p>
                <div className="mb-3 mx-auto w-3/4">
                    <form action="">
                        <div className="flex flex-col lg:flex-row gap-x-10 justify-center gap-y-10 lg:gap-y-0">
                            <input className="p-1 bg-white border-2 lg:w-3/5 w-full rounded-lg h-10 border-gray-300" type="email" name="" id="" placeholder="Enter Your Email" />
                            <button className="bg-black hover:bg-gray-800 text-white font-thin py-2 px-4 rounded bg-gradient-to-b from-gray-700 via-gray-800 to-gray-950">
                                Get Started
                            </button>
                        </div>
                    </form>
                </div>
            </section>
            <section className="bg-gray-800 p-10 flex flex-col">
                <div className="flex gap-x-10 flex-col lg:flex-row lg:gap-y-0 gap-y-10">
                    <div className="flex items-center lg:w-1/4 w-full">
                        <img
                        className="h-8 w-auto"
                        src={logo}
                        alt="Your Company"
                        />
                        <p className="text-white">
                        <span className="font-bold">Atom</span>Bank
                        </p>
                    </div>
                    <div className="flex text-white lg:w-1/4 w-full items-center">
                        <div className="flex w-full flex-col">
                            <h4 className="w-full font-bold mb-3">Lokasi</h4>
                            <p className="w-full font-thin">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quis, dolor officia.
                            </p>
                        </div>
                    </div>
                    <div className="flex text-white lg:w-1/4 w-full items-center">
                        <div className="flex w-full flex-col">
                            <h4 className="w-full font-bold mb-3">Kontak</h4>
                            <p className="w-full font-thin">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quis, dolor officia.
                            </p>
                        </div>
                    </div>
                    <div className="flex text-white lg:w-1/4 w-full items-center">
                        <div className="flex w-full flex-col gap-5">
                            <div className="flex">
                                <img src={facebook} alt=""/>
                                <p className="ml-2">@atombank</p>
                            </div>
                            <div className="flex">
                                <img src={instagram} alt="" />
                                <p className="ml-2">@atombank</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <hr className="bg-white h-0.5 w-full mx-auto" />
                </div>
                <div className="mt-10">
                    <p className="text-white font-light text-center">Heyanardo &copy; 2021</p>
                </div>

            </section>
        </>
    )
}

export default Home;