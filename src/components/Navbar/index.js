function Navbar(props) {
    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="/"><span><i className="fas fa-users"></i></span>&nbsp;&nbsp;Employee Directory</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search for Employee" aria-label="Search" onChange={props.employeeSearch} value={props.searchValue} />
            </form>
        </nav>
    );
}

export default Navbar;