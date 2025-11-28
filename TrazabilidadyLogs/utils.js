//--> crea ID trazas, logger consola y .log convirtiendo level y fecha en formato legible


const { multistream, destination} = require('pino');
// genero id's unicos con uuid v4 y asigno id a variable
const {v4:uuidv4} = require ('uuid');
const traceIDgenerator = uuidv4();

// genero logger
const logger = require ('pino')({
    level: 'trace',
    formatters:{
        level(label) { return{level: label}; } // Cambia número nivel de log por texto
    },
    timestamp: () => ` ,"time": "${ new Date().toISOString() }" `  // convierte timestamp  de solo numeros a ISO 8601
    },
    multistream([
        {stream: process.stdout},           
        {stream: destination( { dest: 'logsapi.log', sync:false}) } 
    ])
);

// exporto ID unico para trazabilidad, ejemplo -> exports.traceID = traceIDgenerator;
// Genera un nuevo ID cada vez que se llama la funcion en otros archivos
exports.traceIDgenerator = () => {
    return uuidv4();
};
// exporto logger con nombre logger para uso global
exports.logger = logger;


// mensaje de prueba para verificar que el logger y la generación de ID funcionan, para validar quitar comentario si tiene // al inicio
logger.info("Logger inicializado correctamente, genera ID funcionando, ejemplo "+ traceIDgenerator+" Componente utils.js"  );


