import { Outlet, NavLink } from "react-router-dom";
import { FaHome} from "react-icons/fa";
//import {FaMoneyBillTrendUp} from "react-icons/fa";
//import HelpLayout from './HelpLayout'
import{TbZoomMoney} from "react-icons/tb";
import{BiHelpCircle} from "react-icons/bi";
import {RiMoneyDollarCircleFill} from "react-icons/ri";
import {MdOutlineInsertChart} from "react-icons/md";

export default function RootLayout() {
  return (
    <div className="root-layout">
      <header className="main-header-nav">
        <nav>
        <MdOutlineInsertChart/>
          <h1>Budget Tracker</h1>
          <NavLink to="/" className="main-nav"><FaHome />Home</NavLink>
          <NavLink to="TransactionList" className="main-nav"><TbZoomMoney />Transactions</NavLink>
          <NavLink to="help" className="main-nav"><BiHelpCircle/>Help</NavLink>
          <NavLink to="addBudget" className="main-nav"><RiMoneyDollarCircleFill/>Budget</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}