import { useState, useEffect } from 'react';
import './App.css';
import {useLoaderData} from 'react-router-dom';
import { NavLink, Outlet, Form, redirect, Link } from "react-router-dom"
//import {RemoveTransactionAction} from "./transactionMethods/RemoveTransactions"
import { RemoveTransactionAction } from "./transactionMethods/RemoveTransactions";
import {CiMoneyCheck1} from "react-icons/ci";
import {PiProjectorScreenChartDuotone} from "react-icons/pi";


function App() {
  const [count, setCount] = useState(0)
  const [transactions, setTransactions]= useState([]);


const transactionFromLoader= useLoaderData();

/*

const handleDeleteTransaction = async () => {
  try {
    await RemoveTransactionAction();
    // Handle success or additional logic here
  } catch (error) {
    // Handle error here
    console.log("The transaction did not come through.");
  }
};

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
      const response= await fetch('http://localhost:4000/purchaseHistory'); 
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


//Checks to see if the item to be removed is equal to any of the other items in the object
//If so those items will not be assigned to prevTransactions and after iterating through
//prevTransactions will be set.
const onRemoveTransaction = (removedItem) => {
  setTransactions((prevTransactions) => {
    return prevTransactions.filter((transaction) => transaction.item !== removedItem);
  });
};
*/
//let spent=+transactions.forEach((transaction)=>transaction.amount)

/* <div className="right-div">
    <AddTransactions onAddTransaction={onAddTransaction} />
    <RemoveTransactions onRemoveTransaction={onRemoveTransaction} />  
      </div>
*/ 
//<h3>Amount Spent {spent}</h3>

/** {careers.map(career => (
        <Link to={transactionload.id.toString()} key={transactionload.id}>
        
        </Link>
      ))}
      */ 

  return (
   
<>
<h1 ><PiProjectorScreenChartDuotone/>Transctions: </h1>
<div className="scrollable-list">
         
          {transactionFromLoader.map((transactionload) => (
            
            <ul key={transactionload.id}><Link to={transactionload.id.toString()+"/transactionMethods/UpdateTransaction"} key={transactionload.id}> <strong>Transaction #{transactionload.id}</strong>
            </Link>
            
              <li>Date: {transactionload.date} </li>
              <li>Amount: {transactionload.amount}</li>
              <li>Vendor: {transactionload.vendor}</li>
              <li>Item: {transactionload.item}</li>
             <li><Link to={transactionload.id.toString()+"/transactionMethods/UpdateTransaction"} key={transactionload.id}> <button className="update-button">Update Transaction</button>

</Link>
<Link to={transactionload.id.toString()+"/transactionMethods/RemoveTransactions/"} key={transactionload.id}> <button className="update-button" onClick={RemoveTransactionAction}>Delete Transaction</button>

</Link>
</li>

              
            </ul>
          ))}

     
    </div>
    <p>Click on a Transaction to Update it.</p>
    <nav>
        <NavLink to="AddTransactions" className="transactionslist-nav"><CiMoneyCheck1/>Add Transaction</NavLink>
      </nav>
   
   <main>
    <Outlet/>
   </main>
    </>
    
  )
}

export default App

/**
 *  <NavLink to="RemoveTransactions" className="transactionslist-nav">Remove Transaction</NavLink>
 */