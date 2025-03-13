import Wallpaper from '@/app/assets/images/wallpaper.jpg'
import { Beer, Ham } from 'lucide-react'
import Image from 'next/image'
import Card from './components/Card'

export default function Home() {
  return (
    <>
      <div className="w-full h-[650px] relative">
        <Image src={Wallpaper} width={'100%'} height={'100%'} alt='wall' className='w-full h-full object-cover opacity-5' />
        <div className="content absolute top-4 h-[618px] left-2/4 -translate-x-2/4">
          <div className='flex gap-10 h-full'>
            <div className='w-[1000px] h-full bg-red-200 rounded-lg p-14'>
              <div className='w-[450px] flex flex-col items-start gap-8'>
                <h4 className='text-3xl font-semibold text-yellow-800'>100% Doğal</h4>
                <p className='text-5xl leading-tight font-semibold'>Fresh İçicek & Yaz İçeceği</p>
                <span>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                </span>
                <button className='px-6 py-3 bg-slate-200 text-base font-semibold rounded-lg'>
                  Alışverişe Başla
                </button>
              </div>
            </div>
            <div className='w-[550px] flex flex-col gap-10 h-full'>
              <div className='w-full h-[309px] bg-pink-100 rounded-lg p-14'></div>
              <div className='w-full h-[309px] bg-slate-300 rounded-lg p-14'></div>
            </div>
          </div>
        </div>
      </div>

      <div className='content py-6'>
        <div className=''>
          <h3 className='text-3xl font-bold'>Kategoriler</h3>
        </div>
        <div className='mt-8 w-full'>
          <div className='grid grid-cols-5 gap-6'>
            <div className='bg-white border border-gray-100 shadow-lg flex-col gap-3 border-gray-200 text-red-500 h-40 rounded-lg flex justify-center items-center'>
              <Ham size={40} />
              <h4 className='font-bold text-xl text-gray-800'>Lorem İpsum</h4>
            </div>
            <div className='bg-white border border-gray-100 shadow-lg flex-col gap-3 border-gray-200 text-gray-500 h-40 rounded-lg flex justify-center items-center'>
              <Beer size={40} />
              <h4 className='font-bold text-xl text-gray-800'>Lorem İpsum</h4>
            </div>
            <div className='bg-white border border-gray-100 shadow-lg flex-col gap-3 border-gray-200 text-blue-500 h-40 rounded-lg flex justify-center items-center'>
              <Beer size={40} />
              <h4 className='font-bold text-xl text-gray-800'>Lorem İpsum</h4>
            </div>
            <div className='bg-white border border-gray-100 shadow-lg flex-col gap-3 border-gray-200 text-green-500 h-40 rounded-lg flex justify-center items-center'>
              <Beer size={40} />
              <h4 className='font-bold text-xl text-gray-800'>Lorem İpsum</h4>
            </div>
            <div className='bg-white border border-gray-100 shadow-lg flex-col gap-3 border-gray-200 text-orange-500 h-40 rounded-lg flex justify-center items-center'>
              <Beer size={40} />
              <h4 className='font-bold text-xl text-gray-800'>Lorem İpsum</h4>
            </div>
          </div>
        </div>
      </div>

      <div className='content mt-10'>
        <div className='h-12 mb-6 border-b'>
          <h3 className='text-2xl font-bold'>Trend Ürünler</h3>
        </div>
        <div className='grid grid-cols-5 grid-flow-row gap-4 mb-6'>
          {
            [1,2,3,4,5,6,7,8,9,0].map((e, index) => (
              <Card />
            ))
          }          
        </div>
      </div>
      <div className='content mt-14'>
        <div className='h-12 mb-6 border-b'>
          <h3 className='text-2xl font-bold'>En Çok Satılan Ürünler</h3>
        </div>
        <div className='grid grid-cols-5 grid-flow-col gap-10 overflow-x-scroll scroll'>
        {
            [1,2,3,4,5].map(e => (
              <Card />
            ))
          } 
        </div>      
      </div>
    </>
  )
}
