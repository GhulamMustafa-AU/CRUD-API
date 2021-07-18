const vendors = require("../controllers/vendors.controller");
var router = require("express").Router();

//Create a new vendor
router.post("/", vendors.create);
//Retrive all vendor
router.get("/", vendors.findAll);
//Retrieve all published vendors
router.get("/published", vendors.findByPublished);
//Retrieve a single vendor by ID
router.get("/:id", vendors.findOne);
//Update a single vendor by ID
router.put("/:id", vendors.update);
//Delete a single vendor by ID
router.delete("/:id", vendors.delete);
//Delete all vendors
router.delete("/", vendors.deleteAll);

module.exports = router;
