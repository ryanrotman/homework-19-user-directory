import { useState, useEffect } from "react";
import API from "../../utils/API";

function Table() {

    const [employeeList, setEmployeeList] = useState([]);

    useEffect(() => {
        API.getEmployees().then(res => {
            setEmployeeList(res.data.results);
            console.log("Employee List: ", res.data.results);
        })
    }, []);

    return (
        // <div className="container">
            <table className="table table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">State</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeList.map(employee => {
                        return (
                            <tr key={employee.id.value}>
                                <td className="align-middle"><img src={employee.picture.medium} alt={employee.name.first + " " + employee.name.last} /></td>
                                <td className="align-middle">{employee.name.first + " " + employee.name.last}</td>
                                <td className="align-middle">{employee.phone}</td>
                                <td className="align-middle">{employee.email}</td>
                                <td className="align-middle">{employee.location.state}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        // </div>
    );
}

export default Table;