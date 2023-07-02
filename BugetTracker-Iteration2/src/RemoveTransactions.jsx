import React, { useState, useEffect } from 'react'



const template={
    date:"",
    amount:0,
    vendor:"",
    item:""
};




export default function RemoveTransactions({onRemoveTransaction}){

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
onRemoveTransaction(transactionForm.item);



  

  };



    //Returns a form that allows the user to input the value that they want removed.
    return(

        <form
        onSubmit={handleAddTransactionRemove}
        className="div-form"
      >
        <h1>Remove Transaction</h1>

        <fieldset className="flex flex-col">
          <label htmlFor="item">Items Name</label>
          <div className="flex gap-2 items-center">
            <input
              onChange={handleInputChange}
              value={transactionForm.item}
              type="text"
              name="item"
              id="item"
              className="bg-white border-4 focus:outline-none p-2"
            /></div>
            </fieldset>
            <input
          className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
          type="submit"
        ></input>
      </form>

    );
}