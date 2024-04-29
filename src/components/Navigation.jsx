import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export default function Navigation() {
  const { currentUser } = useAuth()
  return (
    <Navbar expand='md' data-bs-theme='dark' className="navigation">
        <Navbar.Brand href="/">ReactJS ToDo</Navbar.Brand>
        {/* Hamburger button below */}
        <Navbar.Toggle />
        <Navbar.Collapse id="navLinks" className="justify-content-end">
            {/* Links for each page will go here. 
                1. npm install react-router-dom 
                2. import Link from react-router-dom */}
            <Nav className="text-center navLink">
                <Link to='/todos' className="nav-link">ToDos</Link>
                <Link to='/categories' className="nav-link">Categories</Link>
                <Link to='/about' className="nav-link">About</Link>
                {!currentUser &&
                  <Link to='/login' className="nav-link">Login</Link>
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}