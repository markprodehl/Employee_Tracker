import React from "react";

function Header() {
    const searchButton = "Search"

    return (
        <div className="container">
            <nav className={`navbar navbar-light bg-secondary`}>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">{searchButton}</button>
                </form>
            </nav>
        </div>
    );
}

export default Header;