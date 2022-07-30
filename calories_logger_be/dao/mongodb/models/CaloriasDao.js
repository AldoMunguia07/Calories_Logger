const { db } = require('../Connection');
const DaoObject = require('../DaoObject');
module.exports = class CaloriasDao extends DaoObject {
    constructor(db = null) {
        super(db, 'calories_lost');
    }
    async setup() {
        if (process.env.MONGODB_SETUP) {
        }
    }

    obtenerTodos(userId) {
        return this.find({ userId: this.objectId(userId) });
    }

    async obtenerTodosPaginacion({ userId, page = 1, pageLimit = 25 }) {
        const calorias = await this.find(
            { userId: this.objectId(userId) },
            null,
            null,
            null,
            null,
            true
        );
        const totalDocs = await calorias.count();
        calorias.skip(pageLimit * (page - 1));
        calorias.limit(pageLimit);
        const caloriasDocs = await calorias.toArray();

        return {
            total: totalDocs,
            page,
            pageLimit,
            totalPages: Math.ceil(totalDocs / pageLimit),
            calorias: caloriasDocs,
        };
    }

    obtenerPorTipoEjercicio({ userId }) {
        const match = {
            $match: {
                userId: this.objectId(userId),
            },
        };
        const groupBy = {
            $group: {
                _id: userId,
                registros: { $sum: 1 },
                calorias: { $sum: '$calorias' },
                promedio: { $avg: '$calorias' },
            },
        };
        const sort = {
            $sort: {
                _id: -1,
            },
        };
        return this.aggregate([match, groupBy, sort]);
    }

    insertar({ userId, calorias, tipoEjercicio, descripcion }) {
        const caloria = {
            userId: this.objectId(userId),
            fecha: new Date().toISOString(),
            calorias,
            tipoEjercicio,
            descripcion,
        };
        return super.insertOne(caloria);
    }
};
