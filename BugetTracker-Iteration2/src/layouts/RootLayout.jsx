import { Outlet, NavLink } from "react-router-dom";
import { FaHome} from "react-icons/fa";
//import {FaMoneyBillTrendUp} from "react-icons/fa";
//import HelpLayout from './HelpLayout'

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header className="main-header-nav">
        <nav>
          <h1>Budget Tracker</h1>
          <NavLink to="/" className="main-nav"><FaHome /> Home</NavLink>
          <NavLink to="TransactionList" className="main-nav">Transactions</NavLink>
          <NavLink to="help" className="main-nav">Help</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}