import React, {useState} from 'react'
import { ImageIcon, GIFIcon, PollIcon, ScheduleIcon, EmojiIcon } from '../Layout/Icon'
const TweetBox = () => {

    const [content, setContent] = useState('')
    return (
        <div className='flex-1 flex flex-col  px-2'>
            {/* Tweet Box  */}
            <textarea placeholder="What's Happening ?" className='w-full text-lg placeholder-gray-dark overflow-hidden outline-none resize-none bg-transparent'
            onChange={e => setContent(e.target.value)}
            value= {content} />
            <div className='flex items-center justify-between'>
                <div className='flex -ml-3'>
                    <div className='flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-lightest'>
                        <ImageIcon className='w-6 h-6 text-primary-base hover:text-gray-500 cursor-pointer' />
                    </div>
                    <div className='flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-lightest'>
                        <GIFIcon className='w-6 h-6 text-primary-base hover:text-gray-500 cursor-pointer' />
                    </div>
                    <div className='flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-lightest'>
                        <PollIcon className='w-6 h-6 text-primary-base hover:text-gray-500 cursor-pointer' />
                    </div>
                    <div className='flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-lightest'>
                        <ScheduleIcon className='w-6 h-6 text-primary-base hover:text-gray-500 cursor-pointer' />
                    </div>
                    <div className='flex items-center justify-center w-9 h-9 rounded-full hover:bg-gray-lightest'>
                        <EmojiIcon className='w-6 h-6 text-primary-base hover:text-gray-500 cursor-pointer' />
                    </div>
                </div>
                <button className='bg-primary-base rounded-full px-5 py-2 font-medium text-white'>Tweet</button>
            </div>
        </div>
    )
}

export default TweetBox