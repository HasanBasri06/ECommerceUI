'use client'

import { openLoginBox } from "@/app/_stores/authStores";
import { User2 } from "lucide-react";
import { useDispatch } from "react-redux";

export default function User() {
    const dispatch = useDispatch()

  return (
    <div className="flex items-center">
        <div onClick={() => dispatch(openLoginBox())} className="w-10 h-10 bg-slate-100 text-gray-800 cursor-pointer flex items-center justify-center rounded-l-full">
            <User2 size={22} />
        </div>
        <div className="w-32 h-full border border-slate-100 text-slate-700 rounded-r-full flex items-center cursor-pointer ps-3">
            <h3 className="font-semibold text-base">Hasan Basri</h3>
        </div>
    </div>
  )
}
