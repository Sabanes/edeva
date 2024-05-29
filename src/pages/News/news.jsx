import React from 'react'
import { DragCloseDrawerExample } from './Opennews'
import Footer from '../../sections/footer/footer'

const News = () => {
  return (
    <>
    {/* MONTH */}

    {/* EVENT */}
    <p class="marquee-text relative text-[10rem] font-bold text-[var(--main)] ">MAY</p>

    <div className='bg-image shadow-[#7e7e7e] border-none shadow  my-[5rem] rounded-xl border w-[90%] mx-auto flex flex-col justify-center items-center'>
        <div className='md:w-[90%] w-full m-auto flex md:flex-row flex-col justify-between items-center md:px-10 px-5 pt-5'>
            <h1 className='text-xl md:text-4xl geist text-white  font-bold'>'Name of Event'</h1>
            <p className='text-md md:text-xl underline md:text-left geist text-center p-5 tracking-wider text-white'>25/05/2024</p>
        </div>

        <div className='flex md:flex-row flex-col justify-center items-center py-5 md:gap-[4rem] m-auto'>
            <img className='rounded-2xl md:w-[350px] w-[90%]' width={400} src="https://images.pexels.com/photos/21412136/pexels-photo-21412136/free-photo-of-klakkur-near-klaksvik-mountainous-island-shot-from-the-ocean-in-the-faroe-islands.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="###" />
            <p className='md:max-w-[50%] md:text-md p-5 text-white font-semibold'>
                Lorem ipsum dolor sit delectus iusto esse perspiciatis perferendis alias ipsum consequuntur dicta, sequi modi ab minus mollitia expedita ea saepe labore officiis similique magnam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi delectus iusto esse perspiciatis perferendis alias ipsum<span className=' opacity-50'> consequuntur dicta, sequi modi ab minus... </span> <br /> <DragCloseDrawerExample />
            </p>
        </div>
    </div>
    {/* EVENT END */}


    
    <Footer />

    </>
  )
}

export default News


