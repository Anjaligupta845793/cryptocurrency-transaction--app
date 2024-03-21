//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Transactions {
    uint256 TransactionsCount ;
    event transaction ( address sender , address reciever,uint256 _amount,uint256 timestamp,string massage , string keyword);
    
    struct Transactiondata {
        
        address sender;
        address reciever;
        uint256 amount;
        uint256 timestamp;
        string massage;
        string keyword;

    }
    Transactiondata[] public AllDataOfTransaction;
    function Sendtrasaction(address payable  _reciever , string memory _massage , uint256 _amount ,string memory _keyword) public {
         TransactionsCount++;
           AllDataOfTransaction.push(Transactiondata({
            sender :msg.sender,
            reciever:_reciever,
            amount:_amount,
            timestamp:block.timestamp,
            massage:_massage,
            keyword:_keyword
           }));
           emit transaction(msg.sender , _reciever, _amount , block.timestamp , _massage,_keyword);
    }
    function getalltransactiondata() public view returns(Transactiondata[] memory){
        return AllDataOfTransaction;
    }
    function gettransactioncount() public view returns(uint){
        return TransactionsCount;
    }


    
}
