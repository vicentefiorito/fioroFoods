import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

{/* NavBar */}
export default function NavBar () {
    return (
       <div className='m-0 p-0 border-4 border-blue-500 flex flex-wrap flex-col'>
       <div className='flex flex-wrap  border-4 border-red-400 justify-between m-0 pl-6 font-medium'>
         <Image src={'/favicon.ico'} alt='fioro foods logo' width={200} height={200}/>
         <div className='flex justify-center items-center  pr-36'>
         <nav className='flex flex-row gap-4 justify-center border-4 border-yellow-300 text-lg'>
             <a>Home</a>
             <a>About Us</a>
             <a>Our Microgreens</a>
             <a>Contact</a>
         </nav>
         </div>
       </div>  
     </div>
    )
  }