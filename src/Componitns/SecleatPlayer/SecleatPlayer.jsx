import React from 'react';

const SecleatPlayer = ({clickPlyers}) => {
    return (
        <div className="max-w-[1100px] mx-auto  ">
           
            {
                clickPlyers.map(mys =>  <div className="border border-gray-400 flex justify-between items-center mb-3 p-4 rounded-xl">
                 <div className='flex gap-4 items-center'>
                    <div>
                        <img className='w-[80px] h-[80px] rounded-full' src={mys["player-img"]}></img>
                    </div>
                   <div>
                     <p className='text-xl font-semibold'>{mys["player-name"]}</p>
                    <p className='text-[15px] text-gray-400'>{mys["batting-style"]}</p>
                   </div>
                 </div>
                 <div>
                    <img src='https://i.ibb.co.com/v6fNkN2P/Vector.png'></img>
                 </div>
            </div>)
            }
        </div>
    );
};

export default SecleatPlayer;