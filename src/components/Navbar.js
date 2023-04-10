import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
            <div className="container ">
                {/* <Link className="navbar-brand" to="/">Your News</Link> */}
                <Link className="navbar-brand" to="/">
                    <img src="https://img.freepik.com/free-vector/news-concept-landing-page_52683-18598.jpg?w=740&t=st=1680939863~exp=1680940463~hmac=6d9204ab8a12a185268fdf800161b305bd6fa5c6d610b5cb12104b5f28aa2aa7" width="60" height="50" alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active font-weight-bold text-large" aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link font-weight-bold text-large text-dark" to="/business">Business</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link font-weight-bold text-large text-dark" to="/entertainment">Entertainment</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link font-weight-bold text-large text-dark" to="/general">General</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle font-weight-bold text-large text-dark" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <div class="dropdown-menu"> <li className="nav-item">
                                <Link className="nav-link font-weight-bold text-large text-dark" to="/health">Health</Link>
                            </li>
                                <li className="nav-item">
                                    <Link className="nav-link font-weight-bold text-large text-dark" to="/science">Science</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link font-weight-bold text-large text-dark" to="/sports">Sports</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link font-weight-bold text-large text-dark" to="/technology">Technology</Link>
                                </li>
                            </div>
                        </li>




                    </ul>


                </div>
                    <input class="form-control mr-sm-2 text-center" style={{width: "250px"}} type="search" placeholder="Search" aria-label="Search"/>

            </div>
        </nav>
    )

}

export default Navbar
