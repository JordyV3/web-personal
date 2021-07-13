// const mongoose = require('mongoose');
const app = require('./App');
const { API_VERSION, IP_SERVER, PORT, PORT_DB } = require('./config');

// mongoose.connect(`mongodb://${IP_SERVER}:${PORT_DB}/test`, {useNewUrlParser: true},(err, res) => {
//     if(err) {
//         throw err;
//     }else {
//         console.log('Coneccion a la base de datos :)');
//         app.listen(port, () => {
//             console.log(`Server en el puerto ${port}`);
//             console.log(`http://${IP_SERVER}:${PORT_DB}/api/${API_VERSION}/`);
//         });
//     }
// });



app.listen(PORT, () => {
  console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
})