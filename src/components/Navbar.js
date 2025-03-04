import React from 'react'
import PropTypes from 'prop-types'
//import { Link } from 'react-router-dom'
export default function Navbar(props){
    
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    {/* <li className="nav-item"> */}
                        {/* <Link className="nav-link" to="/about">{props.about}</Link> */}
                        {/* <a className="nav-link" href="/about">{props.about}</a> */}
                    {/* </li> */}
                    
                    {/* DO NOT DELETE THIS CODE BUT COMMENT IT OUT */}

                    {/* <li className="nav-item">
                        <Link className="nav-link" href="/contact">Contact</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Projects
                        </a>
                        <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Action</a></li>
                        <li><a className="dropdown-item" href="/">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="/">Something else here</a></li>
                        </ul>
                    </li> */}

                    {/* DO NOT DELETE THIS CODE BUT COMMENT IT OUT */}
                    </ul>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <div className={`form-check form-switch text-${props.btnTextColor}`}>
                        <input className='form-check-input mx-1' type="checkbox" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className='form-check-label' htmlFor="flexSwitchCheckDefault">{props.btnText}</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}
//setting constraints to the props
Navbar.propTypes = { 
    title: PropTypes.string.isRequired,
    about: PropTypes.string    
}
// Navbar.defaultProps = {
//     title: 'Title',
//     about: 'About'
// }