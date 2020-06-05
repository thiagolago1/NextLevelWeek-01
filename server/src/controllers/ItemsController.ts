import { Request, Response } from 'express';
import knex from '../database/connection';

class IntemsController {
  async index(request: Request, response: Response) {
    // Indo na DB buscar os items
    const items = await knex('items').select('*');

    const serializedItems = items.map(item => {
      return {
        id: item.id,
        name: item.title,
        //image_url: `http://localhost:3333/uploads/${item.image}`,
        image_url: `http://192.168.1.68:3333/uploads/${item.image}`,
      };
    })

    return response.json(serializedItems);
  }
}

export default IntemsController;