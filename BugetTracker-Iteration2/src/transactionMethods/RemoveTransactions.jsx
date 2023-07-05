import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLoaderData } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import { useParams } from 'react-router-dom'
import { Form, redirect } from "react-router-dom";


const template={
    date:"",
    amount:0,
    vendor:"",
    item:""
};




export default function RemoveTransactions({onRemoveTransaction}){
//#########################################
  const { id } = useParams()
  const purchase = useLoaderData()
//###########################################


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

  const handleAddTransactionRemove = (e) => {
    e.preventDefault(); //Prevents the form from resetting the page
    
    // form should clear for new input
    setTransactionForm(template);
   
    
//Returns the item that the user inputted to be removed.
//Specified item since thats the only field with a proper value.
onRemoveTransaction(transactionForm.item);


  };


 



    //Returns a form that allows the user to input the value that they want removed.
    //I only have the user input the name of the item to be removed.
    return(

      <> 
      <h2>Details for the "{purchase.item}"  purchased:</h2>

<ul className="scrollable-list"> <strong>Transaction #{purchase.id}</strong>
        <li>Date Of Purchase: {purchase.date}</li>
        <li>Amount Spent: {purchase.amount}</li>
        <li>Name Of Vendor: {purchase.vendor}</li>
        <li>Item Purchased: {purchase.item}</li>
      </ul>

<h3>Please hit submit to delete transaction:</h3>
      <Form
        method="post"  
        className="div-form"
        onSubmit={(event) => {
          if (!confirm("Please confirm you want to delete this record.")) {
            event.preventDefault();
          }}}
      >
        <input
          className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
          type="submit"
        ></input>
        
      </Form>

      </>

    );
}
//Envokes the RemoveTransactionAction on Form input.

// data loader
//Passes in the params which contains the desired params property.
export const RemoveTransactionLoader = async ({params }) => {
  const { id } = params


  //Removes the data at the specified id
  const res = await fetch('http://localhost:4000/purchaseHistory/' + id) 

  return res.json()
}

export async function RemoveTransactionAction({request, params}){
    const { id } = params;
  
  
    //Deletes the data at the specified id
    const response = await fetch('http://localhost:4000/purchaseHistory/' + id, { 
      method: "DELETE", 
      
    })
  
    //return redirect(`TransactionList`);
    //Makes it so that the page does not navigate after editing
    return null;

}

/**<h1>Delete Selected Transaction</h1>
  
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
        ></input> */

