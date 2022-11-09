import React, { useState } from "react";
import Cliente from "./cliente";
import Admin from "./admin";

const Inicio = () => {
    let init = <div>
        <div className="navBar">
            <h2 className="h1inicio"> Página de Inicio </h2>
        </div>

        <div>
            <button onClick={vistaAdmin} className="badmin"> Administrador </button>
            <button onClick={vistaCliente} className="bcliente"> Cliente </button>
        </div>
    </div>

    let [estado, setEstado] = useState(init)

    function vistaCliente() {
        setEstado(estado = <Cliente />)
    }
    function vistaAdmin() {
        setEstado(estado = <Admin />)
    }


    return (
        <div>
            {estado}
        </div>
    )

}

export default Inicio