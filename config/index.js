// importamos dotenv, para
// obtner la configuracion desde
// un archivo .env
require("dotenv").config()

// objeto de configuracion global
const config = {
  port: process.env.PORT,
}

// exportamos el objeto
module.exports = config
