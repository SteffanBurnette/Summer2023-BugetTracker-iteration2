import React, { useState, useEffect, useNavigate } from 'react'
//import {onAddTransaction} from './App'
import { NavLink, Outlet, Form, redirect } from "react-router-dom"


const template={
    date:"",
    amount:0,
    vendor:"",
    item:""
};

  




export default function AddTransactions(/*{onAddTransaction}*/){
    //Passes in template as the initial state so the we can specify what to be inputted
const [transactionForm, setTransactionForm]=useState(template);

  //The handle invoked when the value in the input field is changed
  //Will set the value inputted in the field specified
const handleInputChange = (e) => {
    //... used to create a shallow copy
    setTransactionForm((transactionForm) => {
      return {
        ...transactionForm,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAddTransactionFormSubmit = (e) => {
    e.preventDefault(); //Prevents the form from resetting the page
    
    // form should clear for new input
    setTransactionForm(template);

    // new transaction should be added to the DOM
    onAddTransaction({ 
        //Creates shallow copy
      ...transactionForm,
      //date: transactionForm.date,
       //amount: parseInt(transactionForm.amount),
       //vendor: transactionForm.vendor,
       //item: transactionForm.item,

      //maxSalary: parseInt(jobFormState.maxSalary),
      status: 1,
  });
  };


    //Return a form that allows the user to add a transaction 
    return(
      <>
        <Form
        method="post"  
        className="div-form"
      >
        <h1>Add New Transaction</h1>
  
        <fieldset className="flex flex-col">
          <label htmlFor="date">Purchase Date</label>
          <input
            type="date"
            name="date"
            id="date"
            className="contact-form-input-textarea"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="amount">Amount Spent</label>
          <input

            type="number"
            name="amount"
            id="amount"
            className="contact-form-input-textarea"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="vendor">Vendors Name</label>
          <input

            type="text"
            name="vendor"
            id="vendor"
            className="contact-form-input-textarea"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="item">Items Name</label>
          <div className="flex gap-2 items-center">
            <input

              type="text"
              name="item"
              id="item"
              className="contact-form-input-textarea"
            /></div>
            </fieldset>
            <input
          className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
          type="submit"
        ></input>
      </Form>
    
     
  </>
  
    );
  }


  export async function transactionAction({ request}) {
    let formData = await request.formData();
    let transactionData = Object.fromEntries(formData);
    transactionData.amount= parseInt(transactionData.amount);
    
    //Gets the form data and addsa it to the db.json file.
    
    const response = await fetch('http://localhost:4000/purchaseHistory', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(transactionData)

    })

  return redirect('/TransactionList');
  }

  
  
/*
//request gains all of the forms data and the way we access that data is by
  //specifying the forms name attributes.
  export async function transactionAction({request, params}){

    //.formData gets us the form data
    let data= await request.formData();
    let submission=Object.fromEntries(data);
    //get allows use to specify the input fields name so that we can get the corresponding data
    /* const submisson={
      date:data.get('date'),
      amount:parseInt(data.get('amount')),
      vendor:data.get('vendor'),
      item:data.get('item')
     }
*/
/********************* 
     const res= await fetch('http://localhost:3000/purchaseHistory', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(submission)
});

   return redirect('/');
  }
*///////////////
  ///OLD FORM 
  /**<>
        <form
        onSubmit={handleAddTransactionFormSubmit}
        className="div-form"
      >
        <h1>Add New Transaction</h1>
  
        <fieldset className="flex flex-col">
          <label htmlFor="date">Purchase Date</label>
          <input
            onChange={handleInputChange}
            value={transactionForm.date}
            type="date"
            name="date"
            id="date"
            className="contact-form-input-textarea"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="amount">Amount Spent</label>
          <input
            onChange={handleInputChange}
            value={transactionForm.amount}
            type="number"
            name="amount"
            id="amount"
            className="contact-form-input-textarea"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="vendor">Vendors Name</label>
          <input
            onChange={handleInputChange}
            value={transactionForm.vendor}
            type="text"
            name="vendor"
            id="vendor"
            className="contact-form-input-textarea"
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="item">Items Name</label>
          <div className="flex gap-2 items-center">
            <input
              onChange={handleInputChange}
              value={transactionForm.item}
              type="text"
              name="item"
              id="item"
              className="contact-form-input-textarea"
            /></div>
            </fieldset>
            <input
          className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
          type="submit"
        ></input>
      </form>
    
      <nav>
        <NavLink to="TransactionList" className="main-nav">View Your Transactions</NavLink>
      </nav>

      <Outlet />
  </> */
  