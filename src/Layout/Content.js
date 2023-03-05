import React, { useEffect } from 'react'
import { PopulerIcon } from '../Layout/Icon'
import db from '../firebase.js';
import TweetBox from '../components/TweetBox'
import Divider from '../components/Divider'

const Content = () => {

    return (
        <main className="flex-1 bg-white flex flex-col border-r border-l border-gray-extralight">
            <header className='flex sticky top-0 z-10 justify-between items-center p-3 border-b mx-2 border-gray-extralight bg-white'>
                <span className='font-bold text-xl text-gray-900'>Home</span>
                <PopulerIcon className="w-6 h-6 text-primary-base" />
            </header>
            <div className='flex space-x-4 pb-3 mt-2 px-2'>
                <img src='https://pbs.twimg.com/profile_images/1625893330205782019/c17BTtFP_x96.jpg' alt='ProfilePhoto' className=' w-12 h-12  rounded-full ' />
                <TweetBox />
            </div>
            <Divider />
        </main>
    )
}

export default Content