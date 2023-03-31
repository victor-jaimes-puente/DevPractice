import { body, oneOf, validationResult } from "express-validator";

export const nameValidator = body("name").isString();

export const updateUpdateVal = 
body("title").optional();
body("body").optional();
body("status").isIn([body("IN_PROGRESS"), body("SHIPPED"), body("DEPRECATED")]);
body("version").optional();

export const createUpdateVal = 
body("title").exists().isString();
body("body").exists().isString();

export const updateUpdatepointVal = 
body("name").optional().isString();
body("description").optional().isString();

export const createUpdatepointVal = 
body("name").isString();
body("description").isString();
body("updateId").exists().isString();
