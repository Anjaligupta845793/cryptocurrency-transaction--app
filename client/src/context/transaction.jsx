import React, { createContext, useEffect,useState } from 'react';
import { ethers } from "ethers";
import {Contract_Address,Contract_ABI} from '../utilities/conansts.js';
export const TransactionContext = React.createContext();

export const TransctionProvider = ({children}) => {
  const [account, setaccount] = useState([]);
  const [Isloding, setIsloding] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("tracount"));
  const [Isconnected, setIsconnected] = useState(false);
  
  const [formdata, setformdata] = useState({
    
    reciever:'',
    amount:'',
    massage:'',
    keyword:''
    
  })
  const [Transactiondata, setTransactiondata] = useState([])
  const {reciever,amount,massage,keyword} = formdata;
  
  useEffect(() => {
   
    checknetwork();
    CheckifWalletisConnected();
    gettransaction();
    gettransactioncount();
    //console.log(transactionCount)
     if (window.ethereum) {
      window.ethereum.on('accountsChanged',accounthandler);
    }

    return() => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', accounthandler);
      }
    }
    //Sendtransaction();
    
    
    
    
    
  }, [transactionCount])
  const gettransactioncount = async() => {
       const provider = new ethers.providers.Web3Provider(window.ethereum);
      
  
  const signer = provider.getSigner();
  
   const Contract = new ethers.Contract(Contract_Address, Contract_ABI, provider);
   const currenttrasactioncount = await Contract.gettransactioncount();
   console.log(currenttrasactioncount)
   if(currenttrasactioncount){
    setTransactionCount(localStorage.setItem("tracount",parseInt(currenttrasactioncount)));
     console.log(transactionCount)
   }
 
    
  }
  const checknetwork = async() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const network = await provider.getNetwork();
    console.log(network.name);
    console.log(network.chainId);
    if(network.chainId != 11155111) {
      window.alert("plese connect to goerli test network")
    }

  }
  
  const CheckifWalletisConnected = async()=> {
   try {
    if (window.ethereum) {
      const accounts =  await window.ethereum.request({
  "method": "eth_accounts",
  "params": []

});
setaccount(accounts[0]);
 
    } else {
      window.alert("please install metamask");
    }
    
   } catch (error) {
    console.log(error)
   }
  }
  const ConnectWallet = async() => {
     try {
      if (ethereum) {
       await window.ethereum.request({
  "method": "eth_requestAccounts",
  "params": []
});
setIsconnected(true);

      } else {
        console.error("ethereum object did'nt found")
      }
      
     } catch (error) {
      console.log(error)
     }
  }
  const Sendtransaction = async() => {
    setIsloding(true)
    window.ethereum
    .request({
        method: "eth_sendTransaction",
        params: [
    {
        from: account,
        to:reciever,
        // 30400
        gas: "0x5208",
        // 10000000000000
       
        // 2441406250
        value: ethers.utils.parseEther(amount)._hex,
        
    },
]
    })
    const provider = new ethers.providers.Web3Provider(window.ethereum);
  await provider.send("eth_requestAccounts", []);
  console.log("getting this address")
  const signer = provider.getSigner();
  console.log("i am on the way")
  const Contract = new ethers.Contract(Contract_Address, Contract_ABI, signer);
  
  const contr = await Contract.Sendtrasaction(reciever,massage, ethers.utils.parseEther(amount)._hex,keyword);
  
  contr.wait();
  setIsloding(false);
  setTransactionCount(localStorage.getItem("tracount"));
  window.location.reload();

  }
  const gettransaction = async() => {
     const provider = new ethers.providers.Web3Provider(window.ethereum);
 
  const signer = provider.getSigner();
  
  const Contract = new ethers.Contract(Contract_Address, Contract_ABI, provider);
  const rawtransaction = await Contract.getalltransactiondata();
  const StrTransaction = rawtransaction.map((item) => {
    return{
      from:item.sender,
      to:item.reciever,
      amount: parseInt(item.amount._hex)/(10**18),
      date : new Date(parseInt(item.timestamp)*1000).toLocaleString(),
      massage:item.massage,
      keyword:item.keyword

    }
  })

  setTransactiondata(StrTransaction)
 
  
  }
  const accounthandler = async(accounts ) => {
         if(account !== accounts[0] && accounts.length > 0 ){
          setaccount(accounts[0])
         }
         else{
             setaccount(null)
             setIsconnected(false)
         }
  }
  
  return (
    <TransactionContext.Provider  value={{ConnectWallet,account,Isconnected,formdata,setformdata,Sendtransaction,Transactiondata,Isloding,gettransactioncount}}>
        {children}
    </TransactionContext.Provider>
    
  )
}

export default TransctionProvider;