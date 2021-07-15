const Vendor = require("../models/eventpoint.model")


module.exports = {
create: (req, res) => {
    //Validate Request
    if (!req.body){
        res.status(400).send({message : "Content cannot be empty!"})
        return 
    }
    //Save a vendor
    const vendor = new Vendor({
        title: req.body.title, 
        description: req.body.description, 
        published: req.body.published ? req.body.published : false, 
    })
    //Save a vendor in Database
    vendor
    .save(vendor)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res
        .status(500)
        .send({
            message: err.message || "Some error occoured while creating Vendor!"
        })
    })
},

//Retrieve all vendors from the database
findAll: async (req, res) => {
    const title = req.query.title    
    var condition = title ? {title: {$regex: new RegExp(title), $options:"i"}} : {}

    Vendor.find(condition)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({message: err.message || "Some error occured finding all vendors"}))
},

//Retrieve one vendor from the database by ID
findOne: async (req, res) => {
    const id = req.params.id
    vendor.find(id)
    .then(data => {
        if (!data)
            res.status(404).send({message: "Vendor not found with ID: "+id})
        else
            res.send(data)
    })
    .catch(err => {
        res.send(500).send({message: "Error retrieving vendor with ID: "+ id})
    })
},

//Update the Vendor by ID
update: async (req, res) => {
    if (!req.body){
        res.status(400).send("Data to update cannot be empty!")
        return
    }
    const id = req.params.id

    Vendor.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
    .then(data => {
        if (!data){
            res.status(404).send("Error updating vendor, maybe vendor not found!")
        }
        else{
            res.send({message: "Vendor is successfully updated!"})
        }
    })
    .catch(err => {
        res.status(500).send({message: "Error updating vendor with ID: "+id})
    })

},

//Delete Vendor by ID
delete: async (req, res) => {
    const id = req.params.id
    Vendor.findByIdAndRemove(id)
    .then(data => {
        if (!data){
            res.status(404).send("Error deleting vendor, maybe vendor not found!")
        }
        else{
            res.send({message: "Vendor is successfully deleted!"})
        }
    })
    .catch(err => {
        res.status(500).send({message: "Error deleted vendor with ID: "+id})
    })
},

//Delete all Vendors
deleteAll: async (req, res) => {
    Vendor.delete({})
    .then(data => {
        res.send({  message: `{$data.deletedCount} All Vendors are successfully deleted!`})
    })
    .catch(err => {
        res.status(500).send({message: "Error deleteing all vendors"+id})
    })
},

//Find all published Vendors
findByPublished: async (req, res) => {
    Vendor.find({published: true})
    .then(data => res.send(data))
    .catch(err => {
        res.status(500).send({message: "Error deleteing all vendors"+id})
    })
}

} 