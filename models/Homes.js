const knex = require('../config')

const create = (bodyHome) => {
    //Crear un registro en la tabla HOMES
    //bodyHome es un objeto que contiene los valores a insertar

    return knex
        .insert(bodyHome) // Datos a insertar
        .into('homes') // ¿De qué tabla?
        .returning(['house_id', 'title', 'description', 'guest', 'address', 'rental_price', 'fk_user', 'active', 'created_at'])
}
const findAll = () => {
    //Obtener todos los registros de la tabla HOMES
    return knex
        .select(['house_id','title','description','guest','address','rental_price','fk_user','active','created_at'])
        .from('homes')
        .where({ active: true }) // Traemos solo los campos que no hayamos hecho softdelete
}
const findOne = (houseId) => {
    return knex
        .select(['house_id','title','description','guest','address','rental_price','fk_user','active','created_at'])
        .from('homes')
        .where({ house_id: houseId })
        .where({ active: true })
}

const update = (houseId, bodyToUpdate) => {
    return knex
        .update(bodyToUpdate) // La info a actualizar.
        .from('homes')
        .where({ house_id: houseId })
        .returning(['house_id','title','description','guest','address','rental_price','fk_user','active','created_at'])
}

// Borrado físico de la base de datos
const destroy = (houseId) => {
    return knex
        .del()//delete
        .from('homes')
        .where({ house_id: houseId })
}

const softDelete = (houseId) => {
    return knex
        .update({ active: false })
        .from('homes')
        .where({ house_id: houseId })
}

const findOneWithUser = (houseId) => {
    return knex
        .select()
        .from('homes')
        .join('users','users.user_id','=','homes.fk_user')
        .where({ house_id: houseId })
}


module.exports = {
    create,
    findAll,
    findOne,
    update,
    destroy,
    softDelete,
    findOneWithUser
}