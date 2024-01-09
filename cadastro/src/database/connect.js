const mongoose = require('mongoose');

const connectToDataBase = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicaparadevs.c2fly4f.mongodb.net/?retryWrites=true&w=majority`
        );
        console.log('Conexão ao Banco de dados realizada com sucesso!');
    } catch (error) {
        console.error('Ocorreu um erro ao conectar com o banco de dados:', error);
    }
};

module.exports = connectToDataBase;
`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicaparadevs.c2fly4f.mongodb.net/?retryWrites=true&w=majority`