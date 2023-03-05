import React from 'react'


const Trends = ({title, topic, tweetCount}) => {

    

    return (
        <li className='ml-1 pl-2 py-2 mb-4 hover:bg-gray-light' >
            <div className='flex items-center justify-between'>
            <h5 className='text-xs text-faded'>{topic} · Trending</h5>
            <span className='w-10'>···</span>
            </div>
            <h4 className='font-bold'>{title}</h4>
            <p className='text-xs text-faded'>{tweetCount} Tweets</p>    
        </li>

    )
}

export default Trends