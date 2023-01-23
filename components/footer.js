import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className='border-t-2 border-green-300 pt-5 '>
        <div className=' flex flex-col '> 
          <p>Check us out on Social Media!</p>
          <div className='flex'>
          <Link href={'https://www.instagram.com/fiorofoods/'}>
            <Image src={'/ig_icon.png'} alt='instagram icon' width={50} height={50}/>
          </Link>
          
          <Link href={'https://www.facebook.com/fioro.foods'}>
            <Image src={'/fb_icon.png'} alt='facebook icon' width={50} height={50}/>
          </Link>
          </div>

        </div>
      </footer>
    )
}