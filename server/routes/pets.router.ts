import { Request, Response } from "express";
import express from "express";
import pool from "../modules/pool";

const router: express.Router = express.Router();

router.get(
    '/',
    (req: Request, res: Response, next: express.NextFunction): void => {
      const queryString: string = `SELECT owners.name as owner_name, pets.name, pets.breed, pets.color, pets.checked_in FROM pets JOIN owners ON owners.id = pets.owner_id;`
  
      pool
        .query(queryString)
        .then((response: any): void => {
          console.log(response)
          res.send(response.rows);
        })
        .catch((err: string): void => {
          console.log(err);
          res.sendStatus(500);
        });
    }
  );
  

router.post(
  "/",
  (req: Request, res: Response, next: express.NextFunction): void => {
    let queryText = `INSERT INTO pets ("name", "breed", "color", "owner_id") VALUES($1, $2, $3, $4);`;

    pool
      .query(queryText, [req.body.name, req.body.breed, req.body.color, req.body.owner_id])
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
