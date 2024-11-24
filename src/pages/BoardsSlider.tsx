import React from 'react'

const BoardsSlider = () => {
    return (
        <div className='relative'>
            <div className='relative bg-gradient-to-b from-ctm-yellow to-white h-[200px]'>
                <div className="bg-board-top right-[6.32%] left-[6.53%] absolute bg-cover bg-no-repeat bg-right-top w-[1255px]"></div>
            </div>
            {/* right-0 bottom-1/2 left-0 z-20 transform translate-y-1/2*/}
            <div className='container-bg'>

                <h1 className='mx-auto pt-[100px] w-[800px] text-center text-header'>Our Products to Meet Your <span className='text-ctm-sky'>Imaginations</span></h1>
            </div>
            <div className='bg-white h-[1000px]'>

            </div>
        </div>
    )
}

export default BoardsSlider