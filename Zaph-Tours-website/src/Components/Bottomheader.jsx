import { Link } from "react-router-dom";
function Bottomheader(){
    return(
        <nav className="navigation_bar">
        <ol className="nav_list">
          <li className="nav_item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav_item">
            <Link to="/Destination">Places To Go</Link>
          </li>
          <li className="nav_item">
            <Link to="/Trip">Plan Your Trip</Link>
          </li>
          <li className="nav_item">
            <Link to="/Contact">Contact Us</Link>
          </li>
        </ol>
      </nav>
    )
}
export default Bottomheader;