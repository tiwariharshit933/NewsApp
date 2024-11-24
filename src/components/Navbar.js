import React from 'react';
import Switcher from './Switcher';

const Navbar = ({ sticky }) => {
    return (
        <div className="navmain">

            <nav className={sticky? "navbar navbar-sticky navbar-expand-lg navbar-dark bg-dark navbar_custom": "navbar navbar-expand-lg navbar-dark bg-dark navbar_custom"}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">NewsApp</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{'--bs-scroll-height':'100px'}}>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>
                        <div className="d-flex swictherCls">
                            <Switcher />
                        </div>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
