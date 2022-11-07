import React from 'react'
import { useForm } from 'react-hook-form'
import { edadValidator } from './validators';


const styles = {
    p: {
        background: "silver"
    }
}

function Formulario() {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
            nombre: 'ino',
            direccion: 'Calle #123'
        }
    });

    const submit = (datos) => {
        console.log(datos)
    }

    const incluirTelefono = watch('incluirTelefono');

    return (
        <>
            <h2>Formulario con react-hook-form</h2>
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <label>Nombre</label>
                    <input type="text" {...register('nombre', {
                        required: true
                        , maxLength: 5
                    })}>
                    </input>
                    {errors.nombre?.type === 'required' && <p style={styles.p}>Nombre obligatorio</p>}
                    {errors.nombre?.type === 'maxLength' && <p style={styles.p}>Nombre maximo 5 caracteres</p>}
                </div>

                <div>
                    <label>Dirección</label>
                    <input type="text" {...register('direccion', {
                        maxLength: 15
                    })}>
                    </input>
                    {errors.direccion?.type === 'maxLength' && <p style={styles.p}>Dirección maximo 15 caracteres</p>}
                </div>

                <div>
                    <label>Email</label>
                    <input type="text" {...register('email', {
                        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                    })}>
                    </input>
                    {errors.email?.type === 'pattern' && <p style={styles.p}>El formato del email es incorrecto</p>}
                </div>

                <div>
                    <label>Edad</label>
                    <input type="text" {...register('edad', {
                        validate: edadValidator
                    })}>
                    </input>
                    {errors.edad && <p style={styles.p}>La edad debe estar entre 18 y 65</p>}
                </div>

                <div>
                    <label>País</label>
                    <select {...register('pais')}>
                        <option value="cl">Chile</option>
                        <option value="es">España</option>
                        <option value="it">Italia</option>
                    </select>
                </div>

                <div>
                    <label>¿Incluir teléfono?</label>
                    <input type="checkbox" {...register('incluirTelefono')} />
                </div>
                {incluirTelefono && (
                    <div>
                        <label>Teléfono</label>
                        <input type="text" {...register('telefono')} />
                    </div>
                )}

                <input type="submit" value="Enviar" />
            </form>

        </>
    )
}

export default Formulario