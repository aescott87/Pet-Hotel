import { Request, Response } from "express";
import express from "express";
import pool from "../modules/pool";

const router: express.Router = express.Router();
router.put(
    "/petId",
    (req: Request, res: Response, next: express.NextFunction): void => {
      let queryText = `UPDATE PETS SET checked_in = CURRENT_TIMESTAMP WHERE id = 1;`;
  
      pool
        .query(queryText, [req.body.id])
        .then((result) => {
          res.sendStatus(200);
        })
        .catch((error) => {
          console.log("error posting into ", error);
          res.sendStatus(500);
        });
    }
  );
  
  export default router;