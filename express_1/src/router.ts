
import { Router } from "express";
import { body, validationResult } from "express-validator";
import { createProduct, deleteProduct, getOneProduct, getProducts, updateProduct } from "./handlers/product";
import { handleInputErrors } from "./modules/middleware";
import {
  nameValidator,
  updateUpdatepointVal,
  updateUpdateVal,
  createUpdateVal,
  createUpdatepointVal,
} from "./modules/validators";
const router = Router();
/**
 * Product
 */
router.get("/product", getProducts, (req: any, res) => {
 
});

router.get("/product/:id", nameValidator, handleInputErrors, getOneProduct, (req, res) => {});

router.post("/product", nameValidator, handleInputErrors, createProduct, (req, res) => {});

router.put("/product/:id", nameValidator, updateProduct, (req, res) => {});

router.delete("/product/:id", deleteProduct, (req, res) => {});

/**
 * Update
 */

router.get("/update", (req, res) => {});

router.get("/update/:id", (req, res) => {});

router.post("/update", createUpdateVal, (req, res) => {});

router.put("/update/:id", updateUpdateVal, (req, res) => {});

router.delete("/update/:id", (req, res) => {});

/**
 * UpdatePoint
 */

router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint", createUpdatepointVal, (req, res) => {});

router.put("/updatepoint/:id", updateUpdatepointVal, (req, res) => {});

router.delete("/updatepoint/:id", (req, res) => {});

export default router;
