import React, { useState } from "react";

const Form = ({ tableData, setTableData }) => {
    const [newData, setNewData] = useState({
        fullName: "",
        userName: "",
        address: "",
        phoneNumber: "",
        email: "",
        website: "",
        companyName: "",
    });

    const Change = (e) => {
        const { name, value } = e.target;
        setNewData({ ...newData, [name]: value });
    };

    const Add = (e) => {
        e.preventDefault();
        setTableData([...tableData, { ...newData, id: Math.random() }]); // for giving the new data some random id
        setNewData({
            // for enptying the form
            fullName: "",
            userName: "",
            address: "",
            phoneNumber: "",
            email: "",
            website: "",
            companyName: "",
        });
    };

    return (
        <>
            <div className="container-fluid">
                <div className="row ">
                    <form className="d-flex flex-wrap justify-content-center form">
                        <input
                            type="text"
                            name="fullName"
                            required
                            placeholder="full name..."
                            onChange={Change}
                            value={newData.fullName}
                            className="form-control-md col-6 mx-3 mb-1"
                        />
                        <input
                            type="text"
                            name="userName"
                            required
                            placeholder="user name..."
                            onChange={Change}
                            value={newData.userName}
                            className="form-control-md col-6 mx-3 mb-1"
                        />
                        <input
                            type="text"
                            name="phoneNumber"
                            required
                            placeholder="phone number..."
                            onChange={Change}
                            value={newData.phoneNumber}
                            className="form-control-md col-6 mx-3 mb-1"
                        />
                        <input
                            type="text"
                            name="website"
                            required
                            placeholder="website..."
                            onChange={Change}
                            value={newData.website}
                            className="form-control-md col-6 mx-3 mb-1"
                        />
                        <input
                            type="text"
                            name="companyName"
                            required
                            placeholder="company name..."
                            onChange={Change}
                            value={newData.companyName}
                            className="form-control-md col-6 mx-3 mb-1"
                        />
                        <input
                            type="email"
                            name="email"
                            required
                            placeholder="Enter an email..."
                            onChange={Change}
                            value={newData.email}
                            className="form-control-md col-6 mx-3 mb-1"
                        />
                        <div className="w-100"></div>
                        <button
                            className="btn btn-primary col-2 mt-1"
                            onClick={Add}
                            type="submit"
                        >
                            Add
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Form;