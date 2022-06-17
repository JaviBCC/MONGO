const {Router} = require ("express")
const router = Router();
const photosCtrl = require("../controller/photos.controller")


// PHOTOS //

router.get("/", photosCtrl.getStart);

router.get("/photos/:id", photosCtrl.getPhotos);

router.get("/photos", photosCtrl.getPhotos);

router.post("/photos", photosCtrl.postPhotos);

router.put("/photos", photosCtrl.putPhotos);

router.delete("/photos", photosCtrl.deletePhotos);



module.exports = router;