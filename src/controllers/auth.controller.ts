import { NextFunction, Request, Response } from 'express';

export namespace AuthController {
  export const register = (req: Request, res: Response, next: NextFunction) => {
    // Register a new user
    try {
      console.log('register', req.body);
      res.status(201).json({
        message: 'Register success',
      });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
