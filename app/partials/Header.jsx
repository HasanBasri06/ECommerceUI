import Logo from '@/app/assets/images/logo.jpg';
import { Heart, Search, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import { api } from '../axios';
import DropDown from '../components/header/DropDown';
import User from '../components/header/User';

async function getAllCategoriesByActive() {
  try {
    const res = await api.get('categories')
    
    return res.data
  } catch (error) {
    
  }
} 


export default async function Header() {
  const categories = await getAllCategoriesByActive()
    
  return (
    <header className='w-full z-40 sticky top-0 bg-white border-b border-b-gray-200'>
        <div className="content h-20 bg-wite flex justify-between items-center py-4">
          <div className="text-2xl font-normal">
            <Image src={Logo} width={200} height={50} alt="logo" className='h-20 object-cover' />
          </div>
          <div className="flex relative w-[500px] items-center h-full">
            <input placeholder="Ürün ara..." type="text" className="w-full bg-gray-200 h-full rounded-lg absolute ps-4 pe-10 outline-none" />
            <button className="absolute text-gray-800 flex justify-center items-center right-0 w-14 rounded-r-lg h-full">
              <Search size={20} strokeWidth={2} />
            </button>
          </div>
          <div className="flex gap-2">
            <DropDown categories={categories} />
            <div className="w-10 h-10 bg-slate-100 text-gray-800 cursor-pointer flex items-center justify-center rounded-full">
              <Heart size={22} />
            </div>
            <User />
            <div className="w-10 h-10 bg-slate-100 text-gray-800 cursor-pointer flex items-center justify-center rounded-full">
              <ShoppingBasket size={22} />
            </div>
          </div>
        </div>
    </header>
  )
}
