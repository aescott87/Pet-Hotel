import { Request, Response } from "express";
import express from "express";
import pool from "../modules/pool";

const router: express.Router = express.Router();

router.post(
  "/",
  (req: Request, res: Response, next: express.NextFunction): void => {
    let queryText = `INSERT INTO owners ("name") VALUES($1);`;
    console.log(req.body)

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

router.get(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryString: string = `SELECT o.name, o.id, COUNT(p.name) FROM pets as p FULL JOIN owners as o ON o.id = p.owner_id GROUP BY o.id;`

    pool
      .query(queryString)
      .then((response: any): void => {

        res.send(response.rows);
      })
      .catch((err: string): void => {
        console.log(err);
        res.sendStatus(500);
      });
  }
);

router.delete(
  '/:id', 
  (req: Request, res: Response, next: express.NextFunction): void => {
    const Id = req.params.id
    let queryText = `DELETE FROM "owners" WHERE "id" = $1;`;
    pool.query(queryText, [Id])
    .then((result) => {
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("error deleting owner", error);
      res.sendStatus(500);
    });
  });

export default router;
