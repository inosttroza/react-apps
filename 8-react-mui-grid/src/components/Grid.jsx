import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Popup from "./Popup";


function Grid() {

    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((er) => console.log(er));
    }, [])

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 50,
            headerClassName: 'super-app-theme--header',
            headerAlign: 'center',
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
            editable: true,
        },
        {
            field: 'username',
            headerName: 'Username',
            width: 120,
            editable: true,
        },
        {
            field: 'email',
            headerName: 'Email',
            type: 'number',
            width: 200,
            editable: true,
        },
        {
            field: 'phone',
            headerName: 'Phone',
            type: 'number', //string(default),number,date,dateTime,boolean,singleSelect
            width: 150,
            editable: true,
        },
        {
            field: 'website',
            headerName: 'Website',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'address',
            headerName: 'Address',
            description: 'Esta columna tiene un captador de valor y no se puede ordenar sort',
            sortable: false,
            width: 200,
            valueGetter: (params) =>
                `${params?.row?.address?.street || ''} ${params?.row?.address?.suite || ''}`,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 170,
            cellClassName: 'actions',
            getActions: (record) => {
                return [
                    <Button variant="contained" onClick={() => clickOpenPopup(record)}>Update</Button>,
                    <Button onClick={clickDelete(record.id)}>Delete</Button>
                ]
            }
        }
    ];


    const clickOpenPopup = (record) => {
        setOpen(true);
        setEdit(record.row);
    };

    const clickEdit = (record) => {

        const updUser = [...users];
        const newLista = [];

        updUser.map((item) => {
            if (item.id === record.id) {
                newLista.push({
                    ...item,
                    name: record?.name,
                    username: record?.username,
                    email: record?.email,
                    phone: record?.phone,
                    website: record?.website,
                });
            }
            else {
                newLista.push(item);
            }
            return newLista //solo para evitar el warning. Se puede borrar la linea
        })
        setUsers(newLista)
        setOpen(false);
    };

    const clickDelete = (id) => () => {
        setUsers(users.filter((row) => row.id !== id));
    };

    const addRow = () => {
        let id = 1;
        if (users.length !== 0)
            id = users[users.length - 1].id + 1

        const newIten = {
            id: id
            , name: "name"
            , username: "username"
            , email: "email"
            , phone: "phone"
            , website: "website"
        }
        setUsers([...users, newIten])
    };

    const removeRow = () => (alert("click delete"));


    return (
        <Box sx={{ height: 500, width: '100%' }}>
            <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                <Button size="small" onClick={removeRow}>
                    Remove a row
                </Button>
                <Button size="small" onClick={addRow}>
                    Add a row
                </Button>
            </Stack>
            <DataGrid
                rows={users}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}

                //add Barra de herramientas encima de las columnas  https://mui.com/x/react-data-grid/export/
                //show/hide columas, filtros, densidad entre filas, export
                components={{ Toolbar: GridToolbar }}

                //estilos
                sx={{
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                    },
                    '& .super-app-theme--header': {
                        backgroundColor: 'rgba(255, 7, 0, 0.55)',
                    }
                }}
            />
            <Popup open={open} setOpen={setOpen} edit={edit} setEdit={setEdit} clickEdit={clickEdit} />
        </Box>

    )
}

export default Grid