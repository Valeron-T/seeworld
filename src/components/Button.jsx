import React from 'react'

function Button({style, icon}) {
  let Icon = icon;
  return (
    <div className="flex p-4 rounded-xl bg-gradient-to-br from-[#60009A] to-[#73226B] justify-end h-min ss:ml-4 shadow-2xl shadow-black">
        <button type='button'>
            <Icon/>
        </button>
    </div>
  )
}

export default Button