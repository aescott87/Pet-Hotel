import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route template
 */
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

/**
 * POST route template
 */
router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    res.sendStatus(201);
  }
);

export default router;
