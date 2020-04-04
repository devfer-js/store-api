// importacion de las librerias principales
// express, es la libreria nucleo para nuestro server
const express = require("express")
// cors, para el "cross-domain" es decir para
// llamar al servidor desde otras direcciones
const cors = require("cors")
// importamos la configuracion global de nuestro proyecto
const config = require("./config")
// rutas del server
const usersApi = require("./routes/users")
const productsApi = require("./routes/products")

// asignacion de la libreria express para usarlo
const app = express()

// configuracion de body-parser
// parsear data de tipo application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parsear data de tipo application/json
app.use(express.json())

// uso de cors
app.use(cors())

// fusionamos la rutas creadas
usersApi(app)
productsApi(app)

// iniciamos el servidor en el puerto asignado en la configuracion
app.listen(config.port, (err) => {
  if (err) console.log("No se pudo iniciar el servidor")
  console.log(`Servidor corriendo en http://localhost:${config.port}`)
})
