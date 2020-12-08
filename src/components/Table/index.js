function Table(props) {

    return (
        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th scope="col"></th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">State</th>
                </tr>
            </thead>
            <tbody>
                {props.list.map(employee => {
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
    );
}

export default Table;