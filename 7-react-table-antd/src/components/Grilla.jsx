import React, { useState, useEffect } from "react";
import { Table, Modal } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { datos } from "../data/datos";
import Popup from "./Popup";


function Grilla() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [page, setPage] = useState(1);
    // const [pageSize, setPageSize] = useState(10);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(null);
    const [buscar, setBuscar] = useState('');

    useEffect(() => {
        //setTimeout(() => {
        setData(datos)
        setLoading(false)
        //}, 1000);
    }, [])


    //////////////////////////////////////////////////////
    /////////COLUMNAS, SORT,FILTROS,ACTIONS///////////////
    ////////////////////////////////////////////////////
    const columns = [
        {
            key: "id",
            title: "Id",
            dataIndex: "id",
            sorter: (a, b) => a.id > b.id,
            sortDirections: ["descend"],
        },
        {
            key: "name",
            title: "Name",
            dataIndex: "name",
            sorter: (a, b) => a.name > b.name,
            sortDirections: ["descend"],
        },
        {
            key: "email",
            title: "Email",
            dataIndex: "email",
        },
        {
            key: "address",
            title: "Address",
            dataIndex: "address",
            filters: [
                {
                    text: "London",
                    value: "London",
                },
                {
                    text: "New York",
                    value: "New York",
                },
            ],
            onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            key: "phone",
            title: "Phone Number",
            dataIndex: "phone",
        },
        {
            key: "website",
            title: "Website",
            dataIndex: "website",
            render: (website) => <a href={website}>{website}</a>,
        },
        {
            key: "action",
            title: "Actions",
            render: (record) => {
                return (
                    <>
                        <div className="flex">
                            <EditOutlined
                                style={{ color: "black" }}
                                onClick={() => Edit(record)}
                            />
                            <DeleteOutlined
                                style={{ color: "red" }}
                                onClick={() => Delete(record)}
                            />
                        </div>
                    </>
                );
            },
        },
    ];


    ////////////////////////////
    /////////PAGINATION///////////////
    //////////////////////////
    // const onChange = (page, pageSize) => {
    //     console.log(page);
    //     setPage(page);
    //     setPageSize(pageSize)
    // }


    ////////////////////////////
    /////////BUSCADOR///////////////
    //////////////////////////
    function handleChange(event) {
        console.log(event.target.value)
        setBuscar(event.target.value);
    }
    const results = !buscar ? data : data.filter((dato) => dato.name.toLowerCase().includes(buscar.toLocaleLowerCase()))


    ////////////////////////////
    /////////CRUD///////////////
    //////////////////////////
    const Delete = (record) => {
        Modal.confirm({
            title: "Seguro que desea eliminar?",
            onOk: () => {
                setData((pre) => {
                    return pre.filter((person) => person.id !== record.id);
                });
            },
        });
    };

    const Edit = (record) => {
        setOpen(true);
        setEdit({ ...record });
    };

    const ResetEditing = () => {
        setOpen(false);
        setEdit(true);
    };

    const Add = (record) => {
        let id = 1;
        if (data.length !== 0)
            id = data[data.length - 1].id + 1
        const newIten = {
            id: id
            , name: record.name
            , email: record.email
            , address: record.address
            , phone: record.phone
            , website: record.website
        }
        setData([...data, newIten])
    };


    return (
        <div className="App">
            <div className="d-flex justify-content-between p-1">
                <input type="text" placeholder="Search..." onChange={handleChange} />
                <button className="btn btn-primary" onClick={() => setOpen(true)}>Add</button>
            </div>
            <div>
                <Table
                    rowKey={"id"}
                    dataSource={results}
                    columns={columns}
                    //pagination={{ pageSize: 10, total: data.lenght, showSizeChanger: true }}
                    pagination={{ position: ['bottomLeft'] }}

                    loading={loading}
                    bordered
                    rowSelection={{}}
                    title={() => 'Header'}
                    footer={() => 'Footer'}
                    size='small' //small-middle-large
                />

                <Popup
                    open={open}
                    edit={edit}
                    setEdit={setEdit}
                    setData={setData}
                    ResetEditing={ResetEditing}
                    Add={Add}
                />
            </div>
        </div>
    )
}

export default Grilla