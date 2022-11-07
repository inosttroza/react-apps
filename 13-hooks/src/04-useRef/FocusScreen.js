import { useRef } from 'react';

export const FocusScreen = () => {

    const inputRefNombre = useRef();

    const onClick = () => {
        // document.querySelector('input').select();
        // console.log(inputRef);
        inputRefNombre.current.select();
    }

    return (
        <>
            <h1>Focus Screen</h1>
            <hr />

            <input
                ref={inputRefNombre}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />

            <button className="btn btn-primary mt-2" onClick={onClick} >
                Set focus
            </button>

        </>
    )
}
