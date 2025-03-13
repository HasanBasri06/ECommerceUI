'use client'

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function DropDown({ categories }) {
    const [dropdown, SetDropDown] = useState(false)

    const toggleCategory = () => {
        SetDropDown(!dropdown)
    }
    
    return (
        <div className="w-40 h-10 mr-4 cursor-pointer relative flex items-center justify-between">
            <div className="w-full h-10 flex items-center justify-between" onClick={toggleCategory}>
                <button className="font-semibold">Kategoriler</button>
                <ChevronDown size={18} />
            </div>
            {dropdown && (
                <div className="w-44 h-auto absolute top-[50px] bg-white rounded-md border right-0 border-gray-200 p-4 shadow-lg">
                    <ul className='space-y-3 text-sm'>
                        {
                            categories.data.map((category, index) => <li key={index}>{category.title}</li>)
                        }
                    </ul>
                </div>
            )}

        </div>
    )
}