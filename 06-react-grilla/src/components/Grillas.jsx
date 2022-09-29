import { useEffect, useState } from "react";
import DataTable from "react-data-table-component"


function Grillas() {

    const [data, setData] = useState([])
    const [pending, setPending] = useState(true);
    const [hideEmail, setHideEmail] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    useEffect(() => {
        //setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.json())
            .then((data) => setData(data), setPending(false))
            .catch((er) => console.log(er));
        //}, 2000);
    }, [])

     useEffect(() => {		
	 	console.log('fila seleccionada', selectedRows);
	 }, [selectedRows]);

    const handleButtonClick = (e) => {		
		  console.log(e);
	};

    const handleChange = (row => {
		setSelectedRows(row.selectedRows);
	});

    const headerResponsive = [
        {
            cell: () => <button onClick={handleButtonClick}>Action</button>,
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
            style: {              
                minWidth: '100px'
            }
        },
        {
            name: 'Id',
            selector: row => row.id,
            sortable: true,
            right: true
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
            center: true
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
            omit: hideEmail,
            left: true
        },
        {
            name: 'Comentario',
            selector: row => row.body,
            sortable: true,
            center: true
        }
    ];

    //solo para ver json respectivo de la fila
    //const ExpandedComponent = ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;

    const customStyles = {
        table: {
            style: {              
                minWidth: '10%'
            },
        },
        rows: {
            style: {
                minHeight: '35px', // alto de cada fila
                //maxWidth: '50%'
            },
        },
        headCells: {
            style: {
                paddingLeft: '1px', // override the cell padding for head cells
                paddingRight: '1px',
            },
        },
        cells: {
            style: {
                paddingLeft: '1px', // override the cell padding for data cells
                paddingRight: '1px',
            },
        },
    };


    return (
        <>
            <button onClick={() => setHideEmail(!hideEmail)}>Ocultar columna email</button>

            <DataTable
                title="Listado de Comentarios"
                columns={headerResponsive}
                data={data}
                //defaultSortField="title"
                // sortIcon={<SortIcon />}
                pagination
                selectableRows
                progressPending={pending}

                onSelectedRowsChange={handleChange}
                theme="dark"
                customStyles={customStyles}
            //solo para ver json respectivo de la fila
            //expandableRows
            //expandableRowsComponent={ExpandedComponent}
            />
        </>
    )
}

export default Grillas