////////////////// Require all the packages /////////////////////
const Keep = require("../models/keep");

// /////////// Exporting all the controller functions ////////////////


// Get request
exports.getAllKeep = (req, res) => {
    Keep.find()
        .then((keeps) => {
            console.log({keeps});
            res.json(keeps);
        })
        .catch((err) =>
            res 
                .status(400)
                .json({message: "no keep found", error: err.message})
        );
};

// Post request
exports.postCreateKeep = (req, res) => {
    Keep.create(req.body)
        .then((data) => {
            console.log({data});
            res.json({message: "keep saved successfully", data});
        })
        .catch((err) => 
            res.status(400).json({
                message: "unable to add keep",
                error: err.message,
            })
        );
};

// Put request
exports.putUpdateKeep = (req, res) => {
    console.log("id: ", req.params.id);
    console.log("body: ", req.body);
    Keep.findByIdAndUpdate(req.params.id, req.body)
        .then((keep) => {
            console.log("edit: ", {keep});
            return res.json({message: "updated successfully", keep});
        })
        .catch((err) => 
            res.status(400).json({
                message: "unable to update to do",
                error: err.message,
            })
        );  
};  

// Delete request 
exports.deleteKeep = (req, res) => {
    Keep.findByIdAndRemove(req.params.id)
        .then((data) => {
            res.json({message: "deleted successfully", data});
        })      
        .catch((err) => 
            res
                .status(400)
                .json({
                message: "keep could not be deleted",
                error: err.message,
            })
        )
};

