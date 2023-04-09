import React from 'react'

function Button({style, icon, text}) {
  let Icon = icon;
  return (
    <div className={style ? style : "flex p-4 rounded-xl bg-gradient-to-br from-[#60009A] to-[#73226B] justify-end h-min ss:ml-4 shadow-2xl shadow-black"}>
        <button type='button'>
            {icon ? <Icon/> : <p className='uppercase'>{text}</p>}
        </button>
    </div>
  )
}

export default Button