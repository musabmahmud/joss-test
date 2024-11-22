import React from 'react'

const BoardsSlider = () => {
    return (
        <div className=''>
            <div className='bg-gradient-to-b from-ctm-yellow to-white h-[200px]' />
            <div className='mx-auto container'>
                <div className="right-0 bottom-1/2 left-0 z-20 absolute w-full h-full transform -translate-y-1/2">
                    <div className="bg-board-top bg-cover bg-no-repeat bg-right-top w-full h-[400px]"></div>
                </div>
                <h1 className='mx-auto pt-[100px] w-[800px] text-center text-header'>Our Products to Meet Your <span className='text-ctm-sky'>Imaginations</span></h1>
            </div>
            <div className='bg-white h-[1000px]'>

            </div>
        </div>
    )
}

export default BoardsSlider