if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

module.exports = {
    port: process.env.PORT,
    jwtPrivateKey: process.env.JWT_PRIVATE_KEY,
    connectionString: process.env.CONNECTION_STRING
}