import { useEffect, useState } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import cellEditFactory from 'react-bootstrap-table2-editor';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';


function Grilla() {

    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((er) => console.log(er));
    }, [])




    const headerSortingStyle = { backgroundColor: '#d8d1e6' };


    const columns = [{
        dataField: 'id'
        , text: 'ID'
        //, hidden: true
        , sort: true
        , headerSortingStyle
        , events: {
            onClick: (e, column, columnIndex, row, rowIndex) => {
                // console.log(e);
                // console.log(column);
                // console.log(columnIndex);
                // console.log(row);
                // console.log(rowIndex);
                alert(`click fila ${rowIndex}, id:${row.id}, nombre:${row.name}, correo:${row.email}, comentario:${row.body} `);
            }
        }
        , footer: 'Footer 1'
        , filter: textFilter()
    }, {
        dataField: 'name'
        , text: 'Nombre'
        , sort: true
        , headerSortingStyle
        // , headerEvents: {
        //     onClick: (e, column, columnIndex) => {
        //         //console.log(e)
        //         // console.log(column)
        //         // console.log(columnIndex)
        //         alert(`click header posicion:${columnIndex}, datafield:${column.dataField}, y texto:${column.text}  `)
        //     }
        // }
        , footer: 'Footer 2'
        , filter: textFilter()
    }, {
        dataField: 'email'
        , text: 'Email'
        , sort: true
        , headerFormatter: mailFormatter
        , footer: 'Footer 3'
        , filter: textFilter()
    }, {
        dataField: 'body'
        , text: 'Comentario'
        , footer: 'Footer 4'
        , footerStyle: {
            backgroundColor: '#c8e6c9'
        }
        , filter: textFilter()
    }];


    const selectRow = {
        mode: "checkbox",
        //  clickToSelect: true,
        //  selected: [1, 3],
        //  clickToEdit: true,

        //---radio button
        //mode: 'radio',
    };

    const defaultSorted = [{
        dataField: 'id',
        order: 'asc'
    }];

    function mailFormatter(column, colIndex) {
        return (
            <h5><strong>@@ {column.text} @@</strong></h5>
        );
    }

    const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'purple', border: '1px solid purple', padding: '0.5em' }}>Component as Header</h3>;

    return (
        <>
            <CaptionElement />
            <BootstrapTable
                keyField='id'
                data={data}
                columns={columns}
                striped hover condensed
                noDataIndication="Table sin datos"
                selectRow={selectRow}
                defaultSorted={defaultSorted}

                ////import react-bootstrap-table2-paginator
                pagination={paginationFactory()}

                ///edicion de celdas con 1 o 2 click a configurar
                cellEdit={cellEditFactory({
                    mode: 'dbclick',
                    onStartEdit: (row, column, rowIndex, columnIndex) => { console.log('start to edit!!!'); },
                    beforeSaveCell: (oldValue, newValue, row, column) => { console.log('Before Saving Cell!!'); },
                    afterSaveCell: (oldValue, newValue, row, column) => { console.log('After Saving Cell!!'); }
                })}

                ///filtro buscar x columna
                filter={filterFactory()}
                //filterPosition="top"
            />



        </>
    )
}

export default Grilla