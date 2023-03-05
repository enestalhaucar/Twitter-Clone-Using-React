import React from 'react'

const Sidelinks = ({ name, Icon, onMenuItemClick, active }) => {
  const isActive = active === name;
  
  return (
    <li className='mb-4 pr-3 group' onClick={()=> (onMenuItemClick(name))}>
      <a href={name.toLowerCase()} className='block cursor-pointer pointer-events-none'>
        <div className='inline-block'>
          <div className={`flex items-center text-xl group-hover:bg-gray-lightest rounded-full py-3 pr-5 pl-3 ${isActive ? "font-bold" : ""}`}>
            <span className='mr-3'><Icon/></span>
            <span>{name}</span>
          </div>
        </div>
      </a>
    </li>

  )
}

export default Sidelinks