import React from 'react';

import homeLogo from '../../assets/farmacia.svg'



function Home() {
    return (
        <>
        <div className="bg-yellow-400 flex justify-center">
          <div className='container grid grid-cols-2 text-black'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl font-bold'> CUIDANDO DE VOCÊ  </h2>
              <p className='text-xl font-bold'> DE GERAÇÃO EM GERAÇÃO</p>
  
              <div className="flex justify-around gap-4">
              
              <button className='rounded bg-black border border-black text-white py-2 px-4'>Ver carrinho</button>

              </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-2/3' />
      
            </div>
          </div>
        </div>
      
      </>
    );
}

export default Home;