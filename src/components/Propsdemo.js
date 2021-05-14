function Students (props) {
    return (
        <div style={{backgroundColor: "skyblue", margin: '1em'}}>
            <h3>Hello {props.name}</h3>
            <h4>Email: {props.email}</h4>
            <h5>Address:{props.other.address}</h5>
            <h5>Mobile:{props.other.mobile}</h5>
        </div>
    )
}

export default Students
