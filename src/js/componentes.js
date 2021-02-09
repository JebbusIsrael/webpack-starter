
import '../css/componentes.css'; 




 export const saludar = (nombre) => {
    console.log ('Creando etiqueta h1, SIMON,claro');
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${nombre}, Cómo va?`;

    document.body.append(h1);

}

