import './App.css';
import { useState, useEffect } from "react";
import API from "../src/utils/API";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Filter from "./components/Filter";
import SortAscBtn from "./components/SortAsc";
import SortDescBtn from "./components/SortDesc";

function App() {

    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        API.getEmployees().then(res => {
            setEmployeeList(res.data.results);
            console.log("Employee List: ", res.data.results);
        })
    }, []);

    const SortAsc = () => {
        const employees = employeeList.sort((a,b) => 
            a.name.last.localeCompare(b.name.last)
        );
        setEmployeeList([...employees]);
    };

    const SortDesc = () => {
        const employees = employeeList.sort((a,b) => 
            b.name.last.localeCompare(a.name.last)
        );
        setEmployeeList([...employees]);
    };

    const employeeSearch = (e) => {
        e.preventDefault();
        console.log("Search input: ", e.target.value);
        setEmployeeList(e.target.value);
    };

    return (
        <div>
            <Navbar
                employeeSearch={employeeSearch}
            />
            <br />
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <SortAscBtn
                            sortAsc={SortAsc}
                        />
                    </div>
                    <div className="col text-center">
                        <SortDescBtn
                            sortDesc={SortDesc}
                        />
                    </div>
                    <div className="col text-center">
                        <Filter />
                    </div>
                </div>
                <br />
                <Table
                    list={employeeList}
                />
            </div>
        </div>
    );
}

export default App;
