import { NavLink, Outlet } from "react-router-dom"

export default function HelpLayout() {
  return (
    <div className="help-layout">

      <h2>Website Help</h2>
      <p>This website aims to empower users by providing them with a powerful expense tracking tool.
         In todays inflation-driven society, its crucial to have a clear understanding of our financial situation.
          By utilizing this platform, users can effectively track their expenses, gain insights into their spending habits, 
          and make informed financial decisions. Whether its monitoring monthly bills, analyzing spending patterns, or setting budgetary goals, 
          this website strives to assist users in navigating their finances with ease and confidence.
           Take control of your expenses and embark on a journey towards financial stability and success.

      </p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact Me</NavLink>
      </nav>

      <Outlet />

    </div>
  )
}