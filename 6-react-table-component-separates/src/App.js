import React, { useState } from "react";
import { data } from "./data/Data";
import Form from "./components/Form";
import ReadOnly from "./components/ReadOnly";
import EditRow from "./components/EditRow";
import Pagination from "./components/Pagination";
import Filter from "./components/Filter";

const App = () => {
  const [tableData, setTableData] = useState(data); // input data for table
  const [toggle, setToggle] = useState(null); //for data ids
  const [search, setSearch] = useState(""); //for filtering data
  const [editData, setEditData] = useState({
    // for editing data
    fullName: "",
    userName: "",
    address: "",
    phoneNumber: "",
    email: "",
    website: "",
    companyName: "",
  });
  const [order, setOrder] = useState("asc"); //for sorting
  const [number, setNumber] = useState(1); // No of pages
  const [postPerPage] = useState(4);

  const Delete = (del) => {
    const delData = tableData.filter((tbd) => {
      return del !== tbd.id;
    });
    setTableData(delData);
  };

  const Edit = (data) => {
    // for opening the editable row
    setToggle(data);
    setEditData(data);
  };

  const Cancel = () => {
    setToggle(null);
  };

  const Sort = (sort) => {
    if (order === "asc") {
      const sorted = [
        ...tableData.sort((a, b) => (a[sort] > b[sort] ? 1 : -1)),
      ];
      console.log(sorted);
      setTableData(sorted);
      setOrder("desc");
    } else if (order === "desc") {
      const sorted = [
        ...tableData.sort((a, b) => (a[sort] < b[sort] ? 1 : -1)),
      ];
      console.log(sorted);
      setTableData(sorted);
      setOrder("asc");
    }
  };
  //for Pagination
  const lastPost = number * postPerPage;
  const firstPost = lastPost - postPerPage;
  const currentData = tableData.slice(firstPost, lastPost);

  return (
    <>
      <div className="container-fluid ">
        <div className="row">


          <div className="alert alert-dark text-center" role="alert">
            <h3>Add a contact</h3>
            <Form tableData={tableData} setTableData={setTableData} />
          </div>

          <h3 className="text-center">React Table components Separates</h3>

          <div className="text-center">
            <Filter search={search} setSearch={setSearch} />
          </div>

          <form className="col-8 offset-2">
            <table className="table">
              <thead className="bg-secondary text-light">
                <tr>
                  <th id="tr" onClick={() => Sort("fullName")}>
                    Name
                  </th>
                  <th id="tr" onClick={() => Sort("userName")}>
                    User Name
                  </th>
                  <th id="tr" onClick={() => Sort("phoneNumber")}>
                    Phone Number
                  </th>
                  <th id="tr" onClick={() => Sort("website")}>
                    Website
                  </th>
                  <th id="tr" onClick={() => Sort("companyName")}>
                    Company Name
                  </th>
                  <th id="tr" onClick={() => Sort("email")}>
                    Email
                  </th>
                  <th id="tr">Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  currentData.filter((val) => {
                    if (search === "") {
                      return val;
                    } else if (val.userName.toLowerCase().includes(search.toLowerCase())) {
                      return val;
                    }
                  })
                    .map((data) => {
                      return (
                        <>
                          {toggle === data ? (
                            <EditRow
                              key={data.id}
                              tableData={tableData}
                              setTableData={setTableData}
                              Cancel={Cancel}
                              setEditData={setEditData}
                              editData={editData}
                            />
                          ) : (
                            <ReadOnly
                              key={data.id}
                              data={data}
                              currentData={currentData}
                              Edit={Edit}
                              Delete={Delete}
                            />
                          )}
                        </>
                      );
                    })}
              </tbody>
            </table>
          </form>

          <Pagination
            number={number}
            setNumber={setNumber}
            tableData={tableData}
            postPerPage={postPerPage}
          />

        </div>
      </div>
    </>
  );
};

export default App;
