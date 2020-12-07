import './App.css';
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Filter from "./components/Filter";

function App() {
    return (
        <div>
            <Navbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        FIXME: Sort by Last Name Asc
                        <Filter />
                    </div>
                    <div className="col text-center">
                    FIXME: Sort by Last Name Desc
                        <Filter />
                    </div>
                    <div className="col text-center">
                        Filter by State
                        <Filter />
                    </div>
                </div>
                <br />
                <Table />
            </div>
        </div>
    );
}

export default App;
