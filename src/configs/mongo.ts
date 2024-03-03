import mongoose from 'mongoose';
import { countConnect } from '~/helpers/checkConnect';

class MongoDB {
  private static instance: mongoose.Connection | null = null;
  private readonly connectString = 'mongodb://localhost:27017';

  private constructor() {}

  public static getInstance(): mongoose.Connection {
    if (!this.instance) {
      this.instance = new MongoDB().connect();
    }
    return this.instance;
  }

  private connect(): mongoose.Connection {
    mongoose
      .connect(this.connectString)
      .then(() => {
        mongoose.set('debug', true);
        countConnect();

        console.log('mongodb connected');
      })
      .catch((error) => {
        console.log('mongodb connect error', error);
      });
    return mongoose.connection;
  }
}

export default MongoDB;
