// //////// Require all the packages //////////////
const express = require("express");

const router = express.Router();

const {
    getAllKeep,
    postCreateKeep,
    putUpdateKeep,
    deleteKeep,
} = require("../controllers/keep");

/**
 * @route GET api/keep
 * @description get all keep
 * @access public
 */

 router.get("/", getAllKeep);

 /**
  * @route POST api/keep
  * @description Add a new Keep
  * @access public
  */
 
 router.post("/", postCreateKeep);
 
 /**
  * @route PUT api/keep/:id
  * @description update keep
  * @access public
  */
 router.put("/:id", putUpdateKeep);
 
 /**
  * @route DELETE api/keep/:id
  * @description delete keep by id
  * @access public
  */
 
 router.delete("/:id", deleteKeep);
 
 module.exports = router;