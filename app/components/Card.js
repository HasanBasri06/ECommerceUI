"use client"

import { Heart, Minus, Plus, Star } from "lucide-react";
import { useState } from "react";

export default function Card() {
    const [basket, setBasket] = useState(0)

    const incrementBasket = () => {
        if (basket < 10) {
            setBasket(basket + 1)
        }
    }

    const decrementBasket = () => {
        if (basket > 0) {
            setBasket(basket - 1)
        }
    }



    const addBasket = async () => {
        
    }

    return (
        <div className='bg-white flex flex-col h-[380px] w-[291px] p-3 rounded-xl border border-card cursor-pointer'>
            <div className='w-full h-[210px] bg-gray-200 rounded-xl relative'>
                <div className="absolute w-10 h-10 bg-gray-300 text-white cursor-pointer right-2 top-2 rounded-full flex justify-center items-center">
                    <Heart size={22} />
                </div>
            </div>
            <div className='w-full h-[170px] flex flex-col gap-2 pt-2'>
                <h2 className='text-lg font-semibold'>Sunstar Fresh Melon Juice</h2>
                <div className='flex gap-1'>
                    <Star size={16} color='yellow' />
                    <Star size={16} color='yellow' />
                    <Star size={16} color='yellow' />
                    <Star size={16} color='yellow' />
                    <Star size={16} color='yellow' />
                </div>
                <h4 className='text-lg font-bold'>18.00₺</h4>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <button onClick={decrementBasket} className='w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center'>
                            <Minus size={16} />
                        </button>
                        <button className='w-6 flex justify-center'>{basket}</button>
                        <button onClick={incrementBasket} className='w-7 h-7 rounded-lg border border-gray-200 flex items-center justify-center'>
                            <Plus size={16} />
                        </button>
                    </div>
                    <button onClick={addBasket} className={`px-4 py-2 bg-orange-500 rounded-md font-semibold text-white ${basket == 0 ? 'opacity-50 cursor-not-allowed' : ''}`}>Sepete Ekle</button>
                </div>
            </div>
        </div>
    )
}
