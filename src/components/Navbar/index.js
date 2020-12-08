function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/"><span><i className="fas fa-users"></i></span>&nbsp;&nbsp;Employee Directory</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={props.employeeSearch} value={props.searchValue} />
                <button className="btn btn-dark my-2 my-sm-0" type="submit" onSubmit={props.employeeSearch}>Search</button>
            </form>
        </nav>
    );
}

export default Navbar;