import React, { useState, useEffect, useNavigate } from 'react'
//import {onAddTransaction} from './App'
import { NavLink, Outlet, Form, redirect, useLoaderData } from "react-router-dom"


export default function BudgetInfo() {

    const budget = useLoaderData();





    return (
        <>


            <h1 >Your finances: </h1>
            <div className="scrollable-list">

                {budget.map((transactionload) => (

                    <ul  key={transactionload.id}>

                        <li>Monthly Income: {transactionload.MonthlyIncome} </li>
                        <li>Monthly Expenses: {transactionload.expenses}</li>
                        <li>Amount to save: {transactionload.BudgetPlan}</li>
                        <li>Amount spent so far: {transactionload.amount}</li>
                    </ul>

                ))}
     
            </div>



            <Form
                method="post"
                className="div-form"
            >
                <h1>Add New Budget Plan</h1>

                <fieldset className="flex flex-col">
                    <label htmlFor="MonthlyIncome">Monthly Income</label>
                    <input
                        type="number"
                        name="MonthlyIncome"
                        id="MonthlyIncome"
                        className="contact-form-input-textarea"
                    />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="expenses">Your Expenses</label>
                    <input

                        type="number"
                        name="expenses"
                        id="expenses"
                        className="contact-form-input-textarea"
                    />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label htmlFor="BudgetPlan">BugetPlan</label>
                    <input

                        type="number"
                        name="BudgetPlan"
                        id="BudgetPlan"
                        className="contact-form-input-textarea"
                    />
                </fieldset>
                <input
                    className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
                    type="submit"
                ></input>
            </Form>

        </>

    );
}

//Gets the budget data and posts it to db.json
export async function budgetAction({ request }) {
    let formData = await request.formData();
    let transactionData = Object.fromEntries(formData);
    transactionData.amount = parseInt(transactionData.amount);

    //Gets the form data and addsa it to the db.json file.

    const response = await fetch('http://localhost:4000/budget', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transactionData)

    })

    //return redirect('/TransactionList');
    //Stays on the same page after executing
    return null;
}

export const budgetLoader = async ({ params }) => {
    //const { id } = params;


    //Updates the data at the specified id
    const res = await fetch('http://localhost:4000/budget')

    return res.json()
}