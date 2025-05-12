const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://Yefer:1305Qs..25@programacion.btvq7.mongodb.net/?retryWrites=true&w=majority&appName=programacion'; // Usa tu URI si estás en MongoDB Atlas

async function connectDB() {
    try {
        const client = await MongoClient.connect(uri); 
        console.log('Conectado a MongoDB');

        const db = client.db('Bd_Houspet'); 
        return db;
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error);
        throw error; 
    }
}

module.exports = connectDB;