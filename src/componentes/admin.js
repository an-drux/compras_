import React, { useState } from "react";

function Admin() {
    let [productos, setproductos] = useState(
        <div className="p">
            <br></br>
            <div className="card">
                <img src="https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3784.jpg" alt="Denim Jeans" ></img>
                <h1>Blue jeans</h1>
                <p class="price">$19.99</p>
                <p>Stock:4</p>
            </div>

            <div className="card">
                <img src="https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3784.jpg" alt="Denim Jeans" ></img>
                <h1>Blue jeans</h1>
                <p class="price">$19.99</p>
                <p>Stock:4</p>
            </div>

            <div className="card">
                <img src="https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3784.jpg" alt="Denim Jeans" ></img>
                <h1>Blue jeans</h1>
                <p class="price">$19.99</p>
                <p>Stock:4</p>
            </div>

        </div>

    )


    let [editar, seteditar] = useState(
        <div>
            <img src="https://cdn.thewirecutter.com/wp-content/media/2021/05/mensjeans-2048px-3784.jpg" alt="Denim Jeans" ></img>
            <label>Nombre</label> <input type="text" className="text" >Pantalones azules</input>
            <label>Precio</label> <input type="text" className="text" >$50.000</input>
            <label>Stock</label> <input type="text" className="text" >4</input>
            <button> Guardar </button>
        </div>

    )



    return (
        <div className="container">
            <div className="navBar">
                <a  onClick={() => { setproductos(productos) }}> Lista Productos </a>
                <a  onClick={() => { seteditar(editar) }} > Modificar Productos </a>
                <a > Lista Ventas </a>
                <a href="/" >Volver</a>
            </div>
            <div className="1"><p>{productos}</p></div>
            {/* <div className="2"><p>{editar}</p></div> */}
           
            


        </div>

    )

}

export default Admin