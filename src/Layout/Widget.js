import React from 'react'
import { SearchIcon } from '../Layout/Icon'
import { Timeline } from 'react-twitter-widgets'
import Trends from '../components/Trends'

const trends = [
  {
    topic: "Politics",
    title: "Meral Mommy",
    tweetCount: 7860
  },
  {
    topic: "Politics",
    title: "MeralakSener",
    tweetCount: 103
  },
  {
    topic: "Politics",
    title: "MeralakSener",
    tweetCount: 103
  },
  {
    topic: "Politics",
    title: "MeralakSener",
    tweetCount: 103
  },
  {
    topic: "Politics",
    title: "MeralakSener",
    tweetCount: 103
  },
  {
    topic: "Politics",
    title: "MeralakSener",
    tweetCount: 103
  },
  {
    topic: "Politics",
    title: "MeralakSener",
    tweetCount: 103
  },
  {
    topic: "Politics",
    title: "MeralakSener",
    tweetCount: 103
  },
  {
    topic: "Politics",
    title: "MeralakSener",
    tweetCount: 103
  },
  {
    topic: "Politics",
    title: "MeralakSener",
    tweetCount: 103
  }

];
const Widget = () => {
  return (
    <aside className="bg-white w-80">
      <div className='flex items-center space-x-2 bg-gray-200 text-faded rounded-full my-1 ml-1 focus-within:bg-white focus-within:ring-1 focus-within:ring-primary-base focus-within:text-primary-base'>
        <SearchIcon className={"w-10 h-10 pl-3"} />
        <input type="text" placeholder="Search Twitter" className="bg-transparent placeholder-faded outline-none text-faded w-full pt-2 pb-2 pl-3 text-sm" />
      </div>
      <div className='mt-5 bg-gray-200 ml-1 rounded-xl '>
        <div >
          <h2 className='font-bold text-xl pl-4 p-3'>Trends for you</h2>
        </div>
        <ul>
          {trends.map(({ topic, title, tweetCount }) => (
            <Trends key={topic} topic={topic} title={title} tweetCount={tweetCount} />
          ))}
        </ul>
        <div className='my-1 py-4 hover:bg-gray-light block'>
          <a href='#' className='text-primary-base text-md pl-4 '>Show more</a>
        </div>

      </div>
    </aside>
  )
}

export default Widget