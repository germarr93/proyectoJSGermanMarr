const carro = new Carrito();
const carrito = document.getElementById('carrito');
const instrumentos = document.getElementById('lista-instrumentos');
const listaInstrumentos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

const procesadPedidoBtn = document.getElementById('procesar-pedido');

cargarEventos();

//Utilizada al presionar un click sobre el boton comprar.
function cargarEventos(){
    instrumentos.addEventListener('click', (e)=>{carro.comprarInstrumento(e)});
    // instrumentos.addEventListener('click',(e)=>  { carro.eliminarInstrumento(e)});
    vaciarCarritoBtn.addEventListener('click', (e)=>{carro.vaciarCarrito(e)});
    document.addEventListener('DOMContentLoaded',carro.verInstrumentosLocal());
    procesadPedidoBtn.addEventListener('click',(e)=>{carro.procesarPedido(e)})
}
