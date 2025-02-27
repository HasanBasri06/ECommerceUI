import Logo from '@/app/assets/images/logo.jpg';
import { ChevronDown, Heart, Search, ShoppingBasket, User } from "lucide-react";
import Image from "next/image";


export default function Header() {
  return (
    <header>
        <div className="content h-20 bg-wite flex justify-between items-center py-4">
          <div className="text-2xl font-normal">
            <Image src={Logo} width={200} height={50} alt="logo" />
          </div>
          <div className="flex relative w-[500px] items-center h-full">
            <input placeholder="Ürün ara..." type="text" className="w-full bg-gray-200 h-full rounded-lg absolute ps-4 pe-10 outline-none" />
            <button className="absolute text-gray-800 flex justify-center items-center right-0 w-14 rounded-r-lg h-full">
              <Search size={20} strokeWidth={2} />
            </button>
          </div>
          <div className="flex gap-2">
            <div className="w-40 h-10 mr-4 cursor-pointer relative flex items-center justify-between">
              <button className="font-semibold">Kategoriler</button>
              <ChevronDown size={18}/>
              {/* <div className="w-40 h-40 absolute top-[60px] bg-white">a</div> */}
            </div>
            <div className="w-10 h-10 bg-slate-100 text-gray-800 cursor-pointer flex items-center justify-center rounded-full">
              <Heart size={22} />
            </div>
            <div className="w-10 h-10 bg-slate-100 text-gray-800 cursor-pointer flex items-center justify-center rounded-full">
              <User size={22} />
            </div>
            <div className="w-10 h-10 bg-slate-100 text-gray-800 cursor-pointer flex items-center justify-center rounded-full">
              <ShoppingBasket size={22} />
            </div>
          </div>
        </div>
    </header>
  )
}
