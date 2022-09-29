import NavbarPrivate from './NavbarPrivate';
import NavbarPublic from './NavbarPublic';
import { useState } from 'react';

function NavbarComp() {

    const [loginUser, setLoginuser] = useState({});
    const isActive = window.sessionStorage.getItem('activo');

    const login = () => {
        setLoginuser({ user: "pablo", pass: "1234" })
        window.sessionStorage.setItem('activo', true);
    };

    const logout = () => {
        setLoginuser({})
        window.sessionStorage.removeItem("activo");
    }

    return (
        <>
            {
                loginUser && isActive
                    ?
                    <NavbarPrivate logout={logout} />
                    :
                    <NavbarPublic login={login} />
            }
        </>
    )
}

export default NavbarComp