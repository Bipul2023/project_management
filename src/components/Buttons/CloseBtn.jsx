import React from 'react'

const CloseBtn = ({className, children, type, onClick}) => {
  return (
    <div>
        <button onClick={onClick} type={type} className={'px-4 py-2 rounded-[5px] cursor-pointer transition-all hover:shadow-[2px_2px_5px] hover:shadow-gray-400 bg-gray-100 hover:bg-gray-200 border border-gray-200 text-black '+" " +className}>{children}</button>
    </div>
  )
}

export default CloseBtn