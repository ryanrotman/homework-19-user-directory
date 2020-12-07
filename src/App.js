import './App.css';
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Filter from "./components/Filter";
import SortAsc from "./components/SortAsc";
import SortDesc from "./components/SortDesc";

function App() {
    return (
        <div>
            <Navbar />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <SortAsc />
                    </div>
                    <div className="col text-center">
                        <SortDesc />
                    </div>
                    <div className="col text-center">
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
