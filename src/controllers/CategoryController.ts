import { Request, Response } from 'express';
import knex from '../database/connection';
import '../lib/env';

class CategoryController {
  async index(request: Request, response: Response) {
    const categories = await knex('categories').select('*');
  
    const serializedCategories = categories.map(category => {
      return {
        id: category.id,
        name: category.title,
        image_url: `${process.env.APP_URL}/uploads/categories/${category.image}`,
      };
    });
  
    return response.json(serializedCategories);
  }
}

export default CategoryController;
