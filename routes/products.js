// importamos el router de express
// para fusionar rutas con el server
const { Router } = require("express")

// Funcion que recibe una app de express
function usersApi(app) {
  // creamos un generador de rutas
  const router = Router()
  // lo aplicamos en el server
  app.use("/productos", router)

  // Peticion de tipo get
  router.get("/", (req, res) => {
    // respondemos con un status 200 => peticion exitosa
    // y un objeto el cual tiene todos los productos,
    // mensaje y el error
    res.status(200).json({
      users: [],
      mensaje: "Productos Traidos exitosamente",
      error: false,
    })
  })

  // Peticion de tipo get, la cual recibe
  // el query de la busqueda
  router.get("/search", (req, res) => {
    const { query } = req.body
    // respondemos con un status 200 => peticion exitosa
    // y un objeto el cual tiene los posibles productos,
    // mensaje y el error
    res.status(200).json({
      users: [],
      query,
      mensaje: "Productos buscados exitosamente",
      error: false,
    })
  })

  // Peticion de tipo post, la cual recibe
  // nombre, precio y stock
  router.post("/", (req, res) => {
    // recibimos los valores por el objeto req
    const { nombre, precio, stock } = req.body
    // respondemos con un status 201 => creado exitosamente
    // y un objeto el cual tiene el usuario,
    // mensaje y el error
    res.status(201).json({
      producto: {
        nombre,
        // convertimos el precio a un numero de un posible string
        precio: Number(precio),
        // convertimos el stock a un numero de un posible string
        stock: Number(stock),
      },
      mensaje: "Usuario creado exitosamente",
      error: false,
    })
  })
}

module.exports = usersApi
