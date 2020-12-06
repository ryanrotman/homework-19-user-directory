import { useState, useEffect } from "react";
import API from "../../utils/API";

function Table() {

    const [employeeList, setEmployeeList] = useState({});

    useEffect(() => {
        API.getEmployees().then(res => {
            setEmployeeList(res.data.results);
            console.log("Employee List: ", res.data.results);
        })
    }, []);

    return (
        <div className="container">
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map(employee => {
                        return (
                            <tr>
                                <td scope="row"><img src={employee.picture.thumbnail} alt={employee.name.first + " " + employee.name.last} /></td>
                                <td>{employee.name.first + " " + employee.name.last}</td>
                                <td>{employee.phone}</td>
                                <td>{employee.email}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Table;