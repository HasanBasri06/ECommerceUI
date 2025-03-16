'use client'

import { yupResolver } from "@hookform/resolvers/yup";
import { CircleX } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import * as yup from 'yup';
import { addAuthUser, closeLoginBox, openRegisterBox } from "../_stores/authStores";
import { api } from "../axios";
import DarkTemplate from "./DarkTemplate";

export default function Login() {  
    const login = useSelector(state => state.auth.loginBox)
    const dispatch = useDispatch()
    const [serverValidation, setServerValidation] = useState([])

    const schema = yup.object().shape({
        email: yup.string().required('Email alanı boş bırakılamaz.').email('Geçerli bir email girmelisiniz.'),
        password: yup.string().required('Şifre alanı boş bırakılamaz.')
    })

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        resolver: yupResolver(schema)
    })

  
    if (!login) {
        return null
    }

    const loginForm = async (formData) => {
        try {
            const response = await api.post('/login', formData)        
            localStorage.setItem('token', response.data.data.token)
            dispatch(addAuthUser())
        } catch (error) {                                    
            if (error.response.data.type && error.response.data.type == 'error') {
                setServerValidation(error.response.data.errors)                
            }            
        }
    }
    

  return (
    <DarkTemplate>
        <div className="w-[425px] box-border p-8 rounded-lg flex flex-col h-[450px] bg-white z-dartkTemplateUp absolute inset-0 top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
            <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Giriş Yap</h3>
                <CircleX size={20} color="red" className="cursor-pointer" onClick={() => dispatch(closeLoginBox())} />
            </div>
            { serverValidation.length > 0 && (
                <div className="flex flex-col my-4">
                    {
                        serverValidation.map((validation, index) => (
                            <span className="text-sm text-red-500" key={index}>{validation}</span>
                        ))
                    }
                </div>
            ) }
            <form onSubmit={handleSubmit(loginForm)} className="flex flex-col items-start space-y-4">
                <div className="flex flex-col w-full mt-10 gap-2">
                    <label className="font-semibold">Email</label>
                    <input {...register('email')} type="text" name="email" className="w-full border border-gray-200 rounded-md h-10 outline-none px-4 box-border" />
                    <p className="text-red-500 text-sm">{errors.email?.message}</p>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <label className="font-semibold">Şifre</label>
                    <input {...register('password')} type="password" name="password" className="w-full border border-gray-200 rounded-md h-10 outline-none px-4 box-border" />
                    <p className="text-red-500 text-sm">{errors.password?.message}</p>
                </div>
                <div className="flex">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" name="rememberme" />
                        <span className="text-sm">Beni unutma!</span>
                    </label>
                </div>
                <button className="w-full bg-blue-300 text-blue-800 font-semibold hover:bg-blue-400 transition-all duration-300 h-10 rounded-md">Giriş Yap</button>
                <span className="text-sm font-semibold">
                    <label>Henüz hesabın yok mu? </label>
                    <span className="font-bold cursor-pointer" onClick={() => dispatch(openRegisterBox())}>Kayıt Ol!</span>
                </span>
            </form>
        </div>
    </DarkTemplate>
  )
}
