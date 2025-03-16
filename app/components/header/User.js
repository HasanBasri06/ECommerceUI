'use client'

import { openLoginBox } from "@/app/_stores/authStores";
import { api } from "@/app/axios";
import { User2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function notAuthUser() {
  const dispatch = useDispatch()

  return (
    <div onClick={() => dispatch(openLoginBox())} className="flex items-center">
        <div className="w-10 h-10 bg-slate-100 text-gray-800 cursor-pointer flex items-center justify-center rounded-full">
            <User2 size={22} />
        </div>
    </div>
  )
}

function authUser() {
  const [getUser, setGetUser] = useState([])

  const getAuthUser = async () =>  {
    try {
      const response = await api.get('my', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      })
      
      setGetUser(response.data.data.user)
    } catch (error) {
      
    }
  }

  useEffect(() => {
    getAuthUser()
  }, [])

  return (
    <div className="flex items-center">
        <div className="w-10 h-10 bg-slate-100 text-gray-800 cursor-pointer flex items-center justify-center rounded-l-full">
            <User2 size={22} />
        </div>
        <div className="w-32 h-full border border-slate-100 text-slate-700 rounded-r-full flex items-center cursor-pointer ps-3">
            <h3 className="font-semibold text-base">{getUser.name}</h3>
        </div>
    </div>
  )
}

export default function User() {
  const existUser = useSelector(state => state.auth.auth)
  console.log(existUser);
  

  if (existUser) {
    return authUser()
  } 

  return notAuthUser()
}
