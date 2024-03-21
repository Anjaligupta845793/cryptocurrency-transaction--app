import React from 'react'
import { useState,useContext } from 'react';
import { TransactionContext } from '../context/transaction';
import { dummydata } from '../utilities/dummydata';
import { shortenaddress } from '../utilities/shortenaddress';
import {  useFetch } from '../../hooks/customhook';
import { Loader } from './Loader';
 
const Card = ({from,to,amount,date,keyword,massage}) =>  {

 const url = useFetch({keyword});
   return(
    <div className="px-5 py-5 border-2 border-solid border-black">
                <a href={`https://goerli.etherscan.io/address/${from}`} target="_blank">
                  <p>{shortenaddress(from)}</p>
                </a>
                <a href={`https://goerli.etherscan.io/address/${to}`} target="_blank">
                  <p>{shortenaddress(to)}</p>
                </a>
                
                <p>{amount}</p>
                <p>{date}</p>
                
                 <div className="w-[200px] h-[200px] overflow-hidden"><img src={url} alt="" /></div>
                <p>{massage}</p>
                <p>{keyword}</p>
              </div>
   )
         
}

const Services = () => {
 
  const {formdata,setformdata,Sendtransaction,Transactiondata,Isloding} = useContext(TransactionContext );
  
  const {reciever,amount,massage,keyword} = formdata;
   
  function handlingform(e) {
    const {name,value} = e.target;
       setformdata({...formdata ,[name]:value} );
  }
  function submit(e) {
    e.preventDefault();
    Sendtransaction();
    

  }
  return (
    <div>
    <div className="w-full h-screen">
      <h1 className="text-center text-5xl font-bold">
        Send transaction
      </h1>
      <form action="" className="flex flex-col mx-auto container lg:max-w-[924px] md:max-w-[667px] max-w-[400px] ">
      
        <label htmlFor="">to</label> 
       <input type="text" name="reciever" value={reciever} onChange={handlingform} className="rounded-lg" />
        <label htmlFor="" >amount</label> 
       <input type="text" name="amount" value={amount } onChange={handlingform} className="rounded-lg"/>
        <label htmlFor="" >massage</label> 
       <input type="text" name="massage" value={massage} onChange={handlingform} className="rounded-lg"/>
       <label htmlFor="" >keyword</label> 
       <input type="text" name="keyword" value={keyword} onChange={handlingform}  className="rounded-lg"/>
       {Isloding ? (<Loader/>):(<button type="submit" onClick={submit} className="border-2 border-solid border-gray-500 py-2 px-2 rounded-xl mt-2 w-[100px] h-[50px] mx-auto" >submit </button>)}
       
      </form>
      
    </div>
    <div className="">
       <p className="text-5xl text-center font-bold mb-10"> 
       
       Recent Transaction</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5 lg:max-w-[924px] md:max-w-[667px] max-w-[400px] mx-auto mt-[20px]">
         
          {
            [...dummydata, ...Transactiondata].reverse().map((item,i) => (
              <Card key={i} {...item} />
              
            ))
          }
        </div>
      </div>
      
      </div>
  )
}

export default Services