export const shortenaddress = (account) => {
     if(account){
          return  ` ${account.slice(0,5)} .... ${account.slice(account.length - 4)}`
     }
}