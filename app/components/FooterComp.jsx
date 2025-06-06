import React from 'react'
import Image from 'next/image'

const FooterComp = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row pt-10 px-4 md:pl-12 md:pr-12 border bg-[#fbfbfb] min-h-screen md:h-screen'>
        <div className='pb-8 md:pr-5 md:pl-52 pt-2'>
         <Image src="/zerodha.svg" alt="logoSvg" className="h-4 mx-auto md:mx-0" height={16} width={90} />
          <div className='text-sm pt-4 text-center md:text-left'>
            <p className='pt-2 text-[#666666]'>© 2010 - 2025, Zerodha Broking Ltd.</p>
            <p className='text-[#666666]'>All rights reserved.</p>
          </div>
          <div className="flex items-center justify-center cursor-pointer md:justify-start pt-3 gap-2">
        <Image src="/x-twitter.svg" alt="twitter" height={24} width={24} />
        <Image src="/facebook.png" alt="facebook" className='h-9' height={36} width={36} />
        <Image src="/instgram.svg" alt="instagram" className='pt-1' height={24} width={24} />
        <Image src="/linkedin.png" alt="linkedin" className='h-10' height={40} width={40} />
          </div>
        </div>

        <div className='flex flex-col md:flex-row md:flex-1 gap-8 md:gap-0'>
          <div className='md:pl-8 cursor-pointer'>
            <p className='text-xl md:text-2xl text-center md:text-left text-[#424242] font-bold'>Company</p>
            <ul className='text-[#666666] text-base md:text-lg py-2 text-center md:text-left'>
              <li className='hover:text-[#387ed1] py-1'>About</li>
              <li className='hover:text-[#387ed1] py-1'>Products</li>
              <li className='hover:text-[#387ed1] py-1'>Pricing</li>
              <li className='hover:text-[#387ed1] py-1'>Referral programme</li>
              <li className='hover:text-[#387ed1] py-1'>Careers</li>
              <li className='hover:text-[#387ed1] py-1'>Zerodha.tech</li>
              <li className='hover:text-[#387ed1] py-1'>Open source</li>
              <li className='hover:text-[#387ed1] py-1'>Press & media</li>
              <li className='hover:text-[#387ed1] py-1'>Zerodha Cares (CSR)</li>
            </ul>
          </div>

          <div className='md:pl-24 cursor-pointer'>
            <p className='text-xl md:text-2xl text-center md:text-left text-[#424242] font-bold'>Support</p>
            <ul className='text-[#666666] text-base md:text-lg py-2 text-center md:text-left'>
              <li className='hover:text-[#387ed1] py-1'>Contact us</li>
              <li className='hover:text-[#387ed1] py-1'>Support portal</li>
              <li className='hover:text-[#387ed1] py-1'>Z-Connect blog</li>
              <li className='hover:text-[#387ed1] py-1'>List of charges</li>
              <li className='hover:text-[#387ed1] py-1'>Downloads & resources</li>
              <li className='hover:text-[#387ed1] py-1'>Videos</li>
              <li className='hover:text-[#387ed1] py-1'>Market overview</li>
              <li className='hover:text-[#387ed1] py-1'>How to file a complaint?</li>
              <li className='hover:text-[#387ed1] py-1'>Status of your complaints</li>
            </ul>
          </div>

          <div className='md:pl-20 cursor-pointer'>
            <p className='text-xl md:text-2xl text-center md:text-left text-[#424242] font-semibold'>Account</p>
            <ul className='text-[#666666] text-base md:text-lg py-2 text-center md:text-left'>
              <li className='hover:text-[#387ed1] py-1'>Open an account</li>
              <li className='hover:text-[#387ed1] py-1'>Fund transfer</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='flex justify-center pt-2 border-t-transparent border-none min-h-16 items-center pb-2 bg-[#fbfbfb] cursor-pointer px-4'>
        <ul className='flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm text-[#666666] bg-[#fbfbfb] items-center'>
          <li className='hover:text-[#387ed1]'>NSE</li>
          <li className='hover:text-[#387ed1]'>BSE</li>
          <li className='hover:text-[#387ed1]'>Terms & Conditions</li>
          <li className='hover:text-[#387ed1]'>Policies & procedure</li>
          <li className='hover:text-[#387ed1]'>Disclosure</li>
          <li className='hover:text-[#387ed1]'>For investors attention</li>
          <li className='hover:text-[#387ed1]'>Investor charter</li>
        </ul>
      </div>
    </>
  )
}

export default FooterComp