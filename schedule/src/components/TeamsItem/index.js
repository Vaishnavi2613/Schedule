import React from 'react'

const index = (props) => {
    const {start , end, sessName, speakPic, speakName} = props;
    return (
    <>
    <div className='flex w-full h-32 overflow-hidden space-x-4 '>
        <div className='w-1/3 bg-gray-200 sm:w-1/5 md:w-1/5 md:pr-5 lg:pr-5 lg:w-1/5 xl:w-1/5 xl:text-5xl rounded-3xl items-end flex flex-col font-bold text-1xl justify-center space-y-1 pr-2'>
            <p className='text-4xl font-bold'>{start}</p>
            <p className='text-4xl font-bold'>{end}</p>
        </div>
        <div className='w-2/3 bg-gray-200 sm:w-4/5 md:w-4/5 md:pr-5 lg:pr-5 lg:w-4/5 xl:w-4/5 flex flex-col items-start justify-center rounded-3xl overflow-hidden pl-2'>
            <h2 className='text-3xl sm:text-4xl w-full'>{sessName}</h2>
            <div className='flex items-center justify-center'>
            <div className='flex flex-row rounded-full w-12 h-12 bg-red-200 border border-gray-500 overflow-hidden'>
                <img src={speakPic} alt='Placement Image' className='object-cover w-full h-full' />
            </div>
            <p className='font-bold text-2xl pl-1'>{speakName}</p>
        </div>
        </div>
    </div>

    
</>
  )
}

export default index