import Image from 'next/image';
import { icons } from '@/assets/data';


export default function Home() {
  return (
    <main className="">
      <p className='flex items-center mx-auto justify-center text-xl'>
        Hey and welcome 
        <span className=' inline-block mx-2'><icons.Hand /></span>
        I'm <span className='font-bold indent-1' title='In fact, an old legend'>Ragab</span>
      </p>
    </main>
  )
}
