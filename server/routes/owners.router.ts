import { Request, Response } from "express";
import express from "express";
import pool from "../modules/pool";

const router: express.Router = express.Router();

router.post(
  "/",
  (req: Request, res: Response, next: express.NextFunction): void => {
    let queryText = `INSERT INTO owners ("name") VALUES($1);`;

    pool
      .query(queryText, [req.body.name])
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
