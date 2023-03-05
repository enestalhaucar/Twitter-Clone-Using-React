import React from 'react'

const UserBox = () => {
  return (
    <div className='flex items-center p-3 hover:bg-gray-profile rounded-full mr-6 mb-4'>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1625893330205782019/c17BTtFP_x96.jpg' alt='ProfilePhoto' className='w-10 h-10 rounded-full mr-3'/>
      </div>
      <div>
        <div>Talha</div>
        <div className='text-faded'>@enestalhau</div>
      </div>
    </div>
  )
}

export default UserBox