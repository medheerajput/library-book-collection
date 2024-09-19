import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

const bookSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  year: Joi.number().integer().min(0).required(),
  genre: Joi.string().required(),
});

const bookValidation = (req: Request, res: Response, next: NextFunction) => {
  if (!req.body._id){
    const { error } = bookSchema.validate(req.body);
    if (error) return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export default { bookValidation };
