import { Router } from "express";
import { ServiceController } from "./service.controller";
import { auth } from "../../../mildleware/authorizationJwt";



const router = Router();
router.post('/services',auth, ServiceController.createService);
router.get('/services', ServiceController.getAllserviceController);
router.get('/services/:id', ServiceController.getSingleService);
router.patch('/services/:id',auth, ServiceController.updateService);
router.delete('/services/:id',auth, ServiceController.deleteService);




export const services = router;