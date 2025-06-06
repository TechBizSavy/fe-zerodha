import React from 'react'
import Image from 'next/image'

const LandingComp = () => {
  return (
    <>
    <div className='bg-[#FFFFFF] pt-16 md:pt-0'>

      {/* the first part starts */}
      <div className='flex justify-center w-full pt-16 md:pt-32 px-4'>
        <Image src="/landing.png" alt="landingLogo" className="h-48 md:h-80 w-auto" height={420} width={500} />
      </div>

      <div className='flex justify-center items-center leading-5 pt-8 md:pt-14 text-[#424242] font-bold text-2xl md:text-4xl px-4'>
        <p className='text-center'>Invest in everything</p>
      </div>

      <div className='flex justify-center items-center text-[#424242] text-lg md:text-xl pt-4 md:pt-6 px-4'>
        <p className='text-center'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
      </div>

      <div className='flex justify-center items-center pt-6 md:pt-8 px-4'>
        <button className='h-10 border-1 rounded-sm w-44 bg-[#387ed1] text-[#fff] pr-2 pl-2 text-lg font-semibold'>Sign up for free</button>
      </div>
      {/* the first part ends */}

      {/* the second part start */}
      <div className='flex flex-col md:flex-row justify-center pt-16 md:pt-32 px-4 md:px-0'>

        <div className='md:pl-24 order-2 md:order-1'>

          <div className='px-4 md:pl-32 p-3'>
            <p className='text-2xl md:text-3xl text-[#424242] text-center md:text-left'>Trust with confidence</p>
          </div>

          <div className='px-4 md:pl-32 pt-4 p-6 text-base md:text-lg'>
            <p className='text-lg md:text-xl text-[#424242] font-bold'>Customer-first always</p>
            <p className='text-[#424242] pt-2'>
              Thats why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
          </div>

          <div className='px-4 md:pl-32 pt-4 p-6 text-base md:text-lg'>
            <p className='text-lg md:text-xl pt-2 text-[#424242] font-bold'>No spam or gimmicks</p>
            <p className='text-[#424242]'>No gimmicks, spam, gamification, or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
          </div>

          <div className='px-4 md:pl-32 pt-4 p-6 text-base md:text-lg'>
            <p className='text-lg md:text-xl pt-2 text-[#424242] font-bold'>The Zerodha universe</p>
            <p className='text-[#424242]'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          </div>

          <div className='px-4 md:pl-32 pt-4 p-6 text-base md:text-lg'>
            <p className='text-lg md:text-xl pt-2 text-[#424242] font-bold'>Do better with money</p>
            <p className='text-[#424242]'>With initiatives like Nudge and Kill Switch, we dont just facilitate transactions, but actively help you do better with your money.</p>
          </div>

        </div>

        <div className='px-4 md:pr-60 order-1 md:order-2'>
       <Image src="/ecosystem.png" alt="ecosystem" className="w-full h-auto md:h-[75vh] md:w-[72vw]" height={600} width={1000} />

          <div className='flex flex-col md:flex-row justify-center md:justify-evenly pt-6 gap-4 md:gap-0'>
            <div className='flex justify-center md:pl-4'>
              <a href="#" className='p-1 text-[#387ed1]'>Explore our products</a>
             <Image src="arrow.svg" alt="arrowLogo"  height={16} width={16} />
            </div>
            <div className='flex justify-center md:pl-2'>
              <a href="#" className='p-1 text-[#387ed1]'>Try Kite demo</a>
              <Image src="arrow.svg" alt="arrowLogo"  height={16} width={16} />
            </div>
          </div>
        </div>
      </div>
      {/* the second part ends */}

      {/* the third part start */}
      <div className="flex justify-center pt-12 md:pt-20 px-4">
       
<Image src="/press-logos.png" alt="preLogo" className="w-full max-w-4xl h-auto" height={80} width={800} />
      </div>
      {/* the third part ends */}

      {/* the fourth part start*/}
      <div className='flex flex-col md:flex-row justify-center items-center pt-16 md:pt-32 px-4 md:pr-32 md:pl-10'>
        <div className='text-wrap md:flex-1'>
          <div className='text-2xl md:text-3xl text-wrap text-[#424242] text-center md:text-left md:pl-56 pb-3'>Unbeatable pricing</div>
          <p className='text-[#424242] text-wrap font-medium text-base md:text-lg text-center md:text-left md:pl-56 md:pr-12'>
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>

          <div className='flex justify-center md:justify-start pt-2'>
            <a href="#" className='md:pl-56 pr-1 text-[#387ed1]'>See pricing</a>
           <Image src="arrow.svg" alt="arrowLogo" height={16} width={16} />
          </div>
        </div>

        <div className='flex flex-col md:flex-row justify-center pt-6 md:flex-1 gap-8 md:gap-0'>
          <div className='flex flex-col items-center md:pr-20'>
         <Image src="/pricing-eq.svg" alt="fLogo" className="h-16 md:h-24" height={96} width={96} />
            <p className='text-sm text-center pt-3'>Free account opening</p>
          </div>
          <div className='flex flex-col items-center md:pr-20'>
            <Image src="/pricing-eq.svg" alt="fLogo" className="h-16 md:h-24" height={96} width={96} />
            <p className='text-sm text-center pt-3'>Free equity delivery</p>
          </div>
          <div className='flex flex-col items-center md:pr-20'>
            <Image src="/other-trades.svg" alt="tLogo" className="h-16 md:h-24" height={96} width={96} />
            <p className='text-sm text-center pt-3'>Intraday and F&O</p>
          </div>
        </div>
      </div>
      {/* the fourth part ends */}

      {/* the fifth part start */}
      <div className='flex flex-col md:flex-row text-[#424242] pt-16 md:pt-24 pb-20 px-4 md:pl-32'>
        <div className='md:pl-32 order-2 md:order-1'>

<Image src="/index-education.svg" alt="varsityLogo" className="w-full h-auto md:h-[45vh] md:w-[38vw]" height={360} width={600} />
        </div>

        <div className='pt-6 md:pt-10 md:pl-40 md:pr-12 text-wrap order-1 md:order-2'>
          <p className='text-2xl md:text-3xl pb-2 text-center md:text-left'>Free and open market education</p>

          <div className='text-wrap md:pr-44 pt-2 text-[#666666] text-base md:text-lg'>
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </div>
          <div className='text-[#387ed1] text-base md:text-lg flex justify-center md:justify-start'>
            <a href="#" className='pt-2 p-2'>Varsity</a>
            <Image src="arrow.svg" alt="a1Logo" height={16} width={16} />
          </div>

          <div className='text-wrap md:pr-44 pt-6 text-[#666666] text-base md:text-lg'>
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </div>
          <div className='text-[#387ed1] text-base md:text-lg flex justify-center md:justify-start'>
            <a href="#" className='pt-2 p-2'>TradingQ&A</a>
           <Image src="arrow.svg" alt="a2Logo" height={16} width={16} />
          </div>
        </div>
      </div>
      {/* the fifth part ends*/}

      {/* the sixth part start*/}
      <div className='flex justify-center text-[#424242] text-2xl md:text-4xl p-3 pt-12 px-4'>
        <p className='text-center'>Open a Zerodha account</p>
      </div>

      <div className='flex justify-center text-[#666666] pt-3 text-sm md:text-md p-3 px-4'>
        <p className='text-center'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
      </div>

      <div className='flex justify-center pt-6 pb-8'>
        <button className='h-10 border-1 rounded-sm w-44 bg-[#387ed1] text-[#fff] pr-2 pl-2 text-lg font-semibold'>Sign up for free</button>
      </div>
      {/* the sixth part ends*/}

    </div>

    </>
  )
}

export default LandingComp