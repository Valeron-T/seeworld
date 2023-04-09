import React from 'react'

export default function InfoCard({ icon, label, data }) {
  let Icon = icon
  return (
    <div className="flex flex-row items-center sm:pl-4">
        <div>
            <Icon/>
        </div>
        <div className="flex flex-col pl-4 text-left">
            <h3>{label}</h3>
            <h1 className='font-worksans font-semibold'>{data}</h1>
        </div>
    </div>
  )
}
