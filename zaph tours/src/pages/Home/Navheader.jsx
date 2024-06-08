import { Link } from "react-router-dom"

function Navheader() {
  return (
    <section className="header">


<ol className="p1">
    <li > <Link to="/">Home</Link></li>
    <li > <Link to="/Destination">Destination</Link></li>
    <li > <Link to="/Trips">Trips</Link></li>
    <li > <Link to="/Contact">Contact</Link></li>

</ol>
</section>
  )
}

export default Navheader


