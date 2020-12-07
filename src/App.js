import './App.css';
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Filter from "./components/Filter";

function App() {
    return (
        <div>
            <Navbar />
            <br />
            <Filter />
            <br />
            <Table />
        </div>
    );
}

export default App;
