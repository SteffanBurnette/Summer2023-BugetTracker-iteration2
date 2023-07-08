import { useLoaderData, useParams } from 'react-router-dom'
import { Form, redirect } from "react-router-dom";

export default function UpdateTransaction() {
  const { id } = useParams()
  const purchase = useLoaderData()

  return (
    <div className="career-details">
      <h2>Details for the "{purchase.item}"  purchased:</h2>

      <ul className="scrollable-list"> <strong>Transaction #{purchase.id}</strong>
              <li>Date Of Purchase: {purchase.date}</li>
              <li>Amount Spent: {purchase.amount}</li>
              <li>Name Of Vendor: {purchase.vendor}</li>
              <li>Item Purchased: {purchase.item}</li>
            </ul>

      <h3>Please enter the values to update the transaction:</h3>
      <Form
        method="post"  
        className="div-form"
      >
        <h1>Update Selected Transaction</h1>
  
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
     
    </div>
  )
}

// data loader
//Passes in the params which contains the desired params property.
export const UpdateTransactionLoader = async ({params }) => {
  const { id } = params


  //Updates the data at the specified id
  const res = await fetch('http://localhost:4000/purchaseHistory/' + id) 

  return res.json()
}

export async function UpdateTransactionAction({request, params}){
    const { id } = params
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    const preparedTransaction = {
      ...updates,
      amount: parseInt(updates.amount),
    }
  
    //Updates the data at the specified id
    const response = await fetch('http://localhost:4000/purchaseHistory/' + id, { 
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(preparedTransaction)
    })
  
    return redirect(`/`);

}