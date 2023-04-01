export async function crearPeticion (dataForm) {

    await fetch("http://localhost:4000/data", {
        method: "POST",
        body: dataForm
    })
        .then( response => response.json() )
        .then( data => console.log(data) )
        .catch( error => console.log(error) )
}

export async function obtenerPropiedadesPeticion () {

    const response = await fetch("http://localhost:4000/data", {
        method: "GET",
    })
        .then ( res => res.json() )
        .catch ( error => console.log(error))
    return response;
}

export async function obtenerPropiedadesPeticionLimit () {

    const response = await fetch(`http://localhost:4000/data-limit`, {
        method: "GET",
    })
        .then ( res => res.json() )
        .catch ( error => console.log(error))
    return response;
}

export async function obtenerPropiedadPeticion (id) {

    const response = await fetch(`http://localhost:4000/data/${id}`, {
        method: "GET",
    })
        .then ( res => res.json() )
        .catch ( error => console.log(error))
    return response;
}

export async function obtenerVendedoresPeticion () {

    const resultado = await fetch("http://localhost:4000/vendedores", {
        method: "GET",
    })
        .then( response => response.json() )
        .catch( error => console.log(error) )

    return resultado;
}

export async function actualizarPeticion (dataForm ,id) {

    const resultado = await fetch(`http://localhost:4000/data/${id}`, {
        method: "PUT",
        body: dataForm,
    })
        .then( response => response.json() )
        .then( data => console.log(data) )
        .catch( error => console.log(error) )

    return resultado;
}

export async function eliminarPeticion (id, propiedad) {
    
    const resultado = await fetch(`http://localhost:4000/data/${id}`, {
        method: "DELETE",
        body: JSON.stringify(propiedad),
        headers : {
            "Content-type" : "application/json"
        }
    }) 
        .then( res => console.log("confirmado", res) )
        .catch( error => console.log(error) )

    return resultado; 
}

export async function obtenerUsuarioPeticion (usuario) {
    const resultado = await fetch("http://localhost:4000/user", {
        method: "GET",
    })
        .then( response => response.json() )
        .catch( error => console.log(error) )

    return resultado;
}

