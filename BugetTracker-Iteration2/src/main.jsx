import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

//Personal pages
import AddTransactions, {transactionAction} from './transactionMethods/AddTransactions.jsx';
import RemoveTransactions, {RemoveTransactionLoader, RemoveTransactionAction} from './transactionMethods/RemoveTransactions.jsx';
import UpdateTransaction, {UpdateTransactionLoader, UpdateTransactionAction} from './transactionMethods/UpdateTransaction.jsx';
import Faq from './help/Faq';
import Contact,{contactAction,contactLoader}from './help/Contact';
import NotFound from './NotFound';
import {transactionsLoader} from './budgetLoaders'
import BudgetInfo,{budgetAction, budgetLoader} from './budgets/budgetInfo.jsx';

//Layouts
import RootLayout from './layouts/RootLayout.jsx'
import HelpLayout from './layouts/HelpLayout'
import MainPageLayout from './layouts/MainPageLayout'

//Constructs the router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
     <Route index element={<MainPageLayout/> } />

     <Route path="TransactionList" element={<App/>}  loader={transactionsLoader} >

     <Route path="AddTransactions" element={<AddTransactions/>} action={transactionAction} errorElement={<NotFound />}/>
     <Route path=":id/transactionMethods/RemoveTransactions" element={<RemoveTransactions />} errorElement={<NotFound />}
     loader={RemoveTransactionLoader}
     action={RemoveTransactionAction}
     />
     
     <Route 
          path=":id/transactionMethods/UpdateTransaction" 
          element={<UpdateTransaction />}
          loader={UpdateTransactionLoader}
          action={UpdateTransactionAction}
        
        />

     </Route>

     
     <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" action={contactAction} loader={contactLoader}
        element={<Contact/>} />
      </Route>

      <Route path="addBudget" element={<BudgetInfo/>} action={budgetAction} loader={budgetLoader} errorElement={<NotFound />}/>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

//<RouterProvider router={router} />

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
