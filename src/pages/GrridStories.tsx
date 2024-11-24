import Image from 'next/image'
import React from 'react'
import grid1 from '../../public/assets/gridstories/1.png';
import grid2 from '../../public/assets/gridstories/2.png';
import grid3 from '../../public/assets/gridstories/3.png';


const GrridStories = () => {
    return (
        <div className='bg-ctm-yellow-dark pt-100 pb-[488px] container-bg'>
            <div className="flex justify-between items-center">
                {/* text left */}
                <div className="relative flex items-center text-center">
                    <span className='absolute md:w-[1000px] text-ctm-dark text-top transform -translate-x-1/3 -rotate-90'>Every fiber holds <br />
                        Untold stories</span>
                </div>
                {/* Right Image Section */}
                <div className="justify-between items-center gap-[100px] grid grid-cols-3 grid-rows-2">
                    <div className="relative col-start-2 row-start-1">
                        <Image src={grid1}
                            alt="Elegant Finishes"
                            width="370"
                            height="450"
                            className="rounded-md w-[370px] h-[450px]"
                        />
                        <div className="bottom-4 left-4 absolute bg-black bg-opacity-50 p-2 rounded-md text-white">
                            Superior Durability
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="relative col-start-2 row-start-2">
                        <Image src={grid1}
                            alt="Elegant Finishes"
                            width="370"
                            height="450"
                            className="rounded-md w-[370px] h-[450px]"
                        />
                        <div className="bottom-4 left-4 absolute bg-black bg-opacity-50 p-2 rounded-md text-white">
                            Moisture Resistance
                        </div>
                    </div>

                    {/* Image 2 */}
                    <div className="relative col-start-3 row-span-2">
                        <Image src={grid1}
                            alt="Elegant Finishes"
                            width="370"
                            height="450"
                            className="rounded-md w-[370px] h-[450px]"
                        />
                        <div className="bottom-4 left-4 absolute bg-black bg-opacity-50 p-2 rounded-md text-white">
                            Moisture Resistance
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default GrridStories