import { Router } from "express";

const router = Router();

import {
    updateOs,
    updateUser,
    getItems,
    createItem,
    createUser,
    getCountryWithUser,
    getCountryWithUserGrouped,
    getItemsGroupBy
} from "../controllers/index.js";

/**
 * Insercion en un objeto sin FK.
 */
 router.post('/item', createItem)

 /**
  * Insercion en un objeto con FK.
  */
 router.post('/user', createUser)

 /**
  * Actualizar un objeto con FK.
  */
 router.put('/user/:id', updateUser)

 /**
  * Actualizar un objeto sin FK.
  */
 router.put('/os/:id', updateOs)

 /**
  * Consulta de una sola tabla.
  */
 router.get('/items', getItems)

 /**
  * Consulta de mas de una tabla.
  */
 router.get('/countrywithuser', getCountryWithUser)

 /**
  * Consulta utilizando agrupación una sola tabla.
  */
 router.get('/getItemsGroupBy', getItemsGroupBy)

 /**
  * Consulta utilizando agrupacion varias tablas.
  */
 router.get('/countrywithusergrouped', getCountryWithUserGrouped)

export default router;
