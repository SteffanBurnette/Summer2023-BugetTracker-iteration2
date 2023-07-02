import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTransactions from './AddTransactions'
import RemoveTransactions from './RemoveTransactions'

function App() {
  const [count, setCount] = useState(0)
  const [transactions, setTransactions]= useState([]);


  //I was recieving an issue where everytime i would have the user submit a new transaction
  //The list would seem to not update. This was weird to me because i had the list in a 
  //side bar and everytime i would hit submit the bar would seemingly move but would not
  //update the transactions list.
  //This issue was cause by me having [transactions] at the end of my useEffect.
  //What this did was re-render the data in the db.json file after the user added a new 
  //transaction leading to the new transaction getting over written with the data in db.json
  //making it seem like nothing has happened.
  useEffect(()=>{

    //Function that retrives info from the db.json file
    async function fetchTransactions(){
      //gets the information from the json file
      const response= await fetch('http://localhost:3000/purchaseHistory'); 
      const purchaseHist=await response.json();
      setTransactions(purchaseHist);//Sets the data in the json file to the transaction state
      return purchaseHist;
    }

    fetchTransactions();

  },[])


  //Function that allows other files to setTransactions
  const onAddTransaction = (newTransaction) => {
    
    //The ... indicates a shallow copy is being made
    // new job should be added to the DOM
    setTransactions((transactions) => {
      return [...transactions, newTransaction];
    });
  };
/*
const onRemoveTransaction=(newTransaction)=>{

  setTransactions((transactions)=>{
    return [...transactions, newTransaction];
  })
};
*/
//Checks to see if the item to be removed is equal to any of the other items in the object
//If so those items will not be assigned to prevTransactions and after iterating through
//prevTransactions will be set.
const onRemoveTransaction = (removedItem) => {
  setTransactions((prevTransactions) => {
    return prevTransactions.filter((transaction) => transaction.item !== removedItem);
  });
};





  return (
    <>
    <div className="left-div">
    <div className="scrollable-list">
          <h1 className="div-form">Transctions: </h1>
          {transactions.map((transaction) => (
            <ul key={transaction.id}>
              <li>Date: {transaction.date}</li>
              <li>Amount: {transaction.amount}</li>
              <li>Vendor: {transaction.vendor}</li>
              <li>Item: {transaction.item}</li>
            </ul>
          ))}
</div>
          
        
    </div>
    <div className="right-div">
    <AddTransactions onAddTransaction={onAddTransaction} />
    <RemoveTransactions onRemoveTransaction={onRemoveTransaction} />  
      </div>

    </>
    
  )
}

export default App
