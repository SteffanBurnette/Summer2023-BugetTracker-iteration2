import { NavLink, useRouteError } from "react-router-dom"

export default function NotFound() {
    //This variable will contain the error message of its associated route
const error=useRouteError();

  return (
    <div>
      <h2>Page not found! {error}</h2>
      <p>
It appears that you may have taken a wrong turn on your financial journey and ended up on the wrong page. Dont worry, simply click the homepage button to return and get back on track.
      </p>

      <p>Go to the <NavLink to="/">Homepage</NavLink>.</p>
    </div>
  )
}