import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <nav className="nav">
      <Link to={"/"}className="nav-link active" aria-current="page" >All</Link>
      <Link to={"/Fsd"}className="nav-link">Full Stack Development</Link>
      <Link to={"/Data_sc"}className="nav-link">Data Science</Link>
      <Link to={"/Cyber"}className="nav-link">Cyber Security</Link>
      <Link to={"/Career"}className="nav-link">Career</Link>
      </nav>
    </div>
  )
}

export default Navbar
