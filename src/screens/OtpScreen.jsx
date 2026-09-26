import React, { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function OtpScreen() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false
    const newOtp = [...otp]
    newOtp[index] = element.value
    setOtp(newOtp)
    if (element.nextSibling && element.value) {
      element.nextSibling.focus()
    }
  }

  return (
    <div className="w-full h-full bg-white flex flex-col pt-12">
      {/* Header */}
      <div className="px-6 pb-4 flex items-center relative">
        <button 
          onClick={() => navigate(-1)}
          className="p-2 -ml-2 rounded-full hover:bg-zinc-100 transition-colors z-10"
        >
          <ArrowLeft size={24} className="text-zinc-900" />
        </button>
      </div>

      <div className="flex-1 px-8 pt-8">
        <h1 className="text-[28px] font-semibold text-zinc-900 tracking-tight mb-2">Nhập mã OTP</h1>
        <p className="text-zinc-500 text-[15px] mb-8">
          Chúng tôi đã gửi mã xác nhận đến số điện thoại của bạn
        </p>
        
        <div className="flex justify-between mb-8">
          {otp.map((data, index) => {
            return (
              <input
                className="w-12 h-14 border border-zinc-200 rounded-xl text-center text-xl font-semibold text-zinc-900 focus:border-[#4ADE80] focus:ring-1 focus:ring-[#4ADE80] outline-none transition-all"
                type="text"
                name="otp"
                maxLength="1"
                key={index}
                value={data}
                onChange={e => handleChange(e.target, index)}
                onFocus={e => e.target.select()}
              />
            )
          })}
        </div>

        <button 
          onClick={() => navigate('/')}
          className="w-full bg-[#4ADE80] hover:bg-[#22c55e] text-white py-4 rounded-full font-semibold text-[17px] shadow-[0_8px_20px_-8px_rgba(74,222,128,0.5)] transition-all mb-6"
        >
          Xác nhận
        </button>

        <p className="text-center text-[15px] text-zinc-500">
          Chưa nhận được mã? <button className="font-semibold text-zinc-900">Gửi lại</button>
        </p>
      </div>
    </div>
  )
}
