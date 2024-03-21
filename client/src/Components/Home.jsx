import { Contract } from 'ethers';
import { TransactionContext } from '../context/transaction';
import { shortenaddress } from '../utilities/shortenaddress';
import Services from './Services';
import React, { useContext } from 'react'
//{Isconnected ? <p>{shortenaddress(account)}</p> :<button onClick={ConnectWallet}>click</button>}
const Home = () => {
 const {ConnectWallet,account,Isconnected,gettransactioncount} = useContext(TransactionContext);

  return (
    
    <div className="w-full h-screen  ">
      <div className="flex md:flex-row flex-col justify-between container  lg:max-w-[924px] md:max-w-[667px] max-w-[400px] mx-auto md:mt-60 mt-40 md:text-left text-center">
        <div>
          <h1 className="md:text-4xl  text-5xl font-bold">welcome to Decentrilized application</h1>
          <h1 className="text-3xl mt-6">send crypto across the world</h1>
          <h1 className="text-2xl">buy and sell</h1>
          <h1 >{ !Isconnected && <button onClick={ConnectWallet} className="border-2 border-solid border-gray-500 py-2 px-2 rounded-xl mt-2" >
            
            ConnectWallet</button>}</h1> 
           
       </div>
        
       <div className="border-2 border-solid border-gray-500 rounded-2xl h-[220px] w-[400px] py-20 md:mt-0 mt-10  ">
          {Isconnected && <p>{shortenaddress(account)}</p>}
          
        </div>
      
      <div>

      </div>
      </div>
    </div>

  )
}

export default Home
