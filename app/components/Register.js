'use client'

import { CircleX } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { closeRegisterBox, openLoginBox } from "../_stores/authStores";
import DarkTemplate from "./DarkTemplate";

export default function Register() {  
  const register = useSelector(state => state.auth.registerBox)
  const dispatch = useDispatch()

    if (!register) {
        return null
    }
    

  return (
    <DarkTemplate>
        <div className="w-[425px] h-[575px] box-border p-8 rounded-lg flex flex-col bg-white z-dartkTemplateUp absolute inset-0 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Kayıt Ol!</h3>
                <CircleX size={20} color="red" className="cursor-pointer" onClick={() => dispatch(closeRegisterBox())} />
            </div>
            <form className="flex flex-col items-start space-y-4">
                <div className="flex flex-row w-full mt-10 gap-2">
                    <div className="w-2/4">
                        <label className="font-semibold">İsim</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md h-10 outline-none px-4 box-border" />
                    </div>
                    <div className="w-2/4">
                        <label className="font-semibold">Soyisim</label>
                        <input type="text" className="w-full border border-gray-200 rounded-md h-10 outline-none px-4 box-border" />
                    </div>
                </div>
                <div className="flex flex-col w-full mt-10 gap-2">
                    <label className="font-semibold">Email</label>
                    <input type="text" className="w-full border border-gray-200 rounded-md h-10 outline-none px-4 box-border" />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="font-semibold">Şifre</label>
                    <input type="password" className="w-full border border-gray-200 rounded-md h-10 outline-none px-4 box-border" />
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="font-semibold">Şifre Onayla</label>
                    <input type="password" className="w-full border border-gray-200 rounded-md h-10 outline-none px-4 box-border" />
                </div>
                <div className="flex">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        <span className="text-sm">Beni unutma!</span>
                    </label>
                </div>
                <button className="w-full bg-blue-300 text-blue-800 font-semibold hover:bg-blue-400 transition-all duration-300 h-10 rounded-md">Giriş Yap</button>
                <span className="text-sm font-semibold">
                    <label>Zaten hesabım var! </label>
                    <span className="font-bold cursor-pointer" onClick={() => dispatch(openLoginBox())}>Giriş Yap!</span>
                </span>
            </form>
        </div>
    </DarkTemplate>
  )
}
