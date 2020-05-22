const path = require("path");
const router = require("express").Router();
const books = require("../models/books")

//we need 3 routes
//get route 
router.get("/api/books", function(req,res){
books.find()
.then(function(results){
res.json(results)

}).catch(function(err){
  res.json(err)
})

})
//post route
router.post("/api/books", function(req,res){
books.create(req.body)
.then(function(){
  res.sendStatus(200)
}).catch(function(err){
  res.json(err)
})
})
//delete route
router.delete("/api/books/:id", function(req,res){
books.remove({id:req.params.id})
.then(function(){
  res.sendStatus(200)
}).catch(function(err){
  res.json(err)
})
})


// If no API routes are hit, send the React app
router.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
