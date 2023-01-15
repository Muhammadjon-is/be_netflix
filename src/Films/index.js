import express from "express"




const filmRouter = express.Router();
//  ! get
filmRouter.get("/", async (req, res, next) => {
    try{

    } catch (error){
        console.log(error);
        next(error)
    }
})
// !Get
filmRouter.get(":/filmId", async(req, res, next) => {
    try{

    } catch(error){
        console.log(error);
        next(error)
    }
})
// !Post 
filmRouter.post("/", async(req, res, next) => {
    try{

    } catch(error) {
        console.log( error);
        next(error)
    }
})

// !delete 
filmRouter.delete("/:filmId", async(req, res, next) => {
    try{

    } catch(error) {
        console.log( error);
        next(error)
    }
})

// !Post 
filmRouter.post("/filmId/poster", async(req, res, next) => {
    try{

    } catch(error) {
        console.log( error);
        next(error)
    }
})

// ! get Pdf

filmRouter.get("/:filmId/pdf", async (req, res, next) => {
    try{

    } catch(error) {
        console.log( error);
        next(error)
    }
})

export default filmRouter
