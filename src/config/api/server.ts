import { config } from 'dotenv';
config();
import express from 'express';
import { errorHandler } from '../../shared/middlewares/errorHandler.js';
import morgan from 'morgan';
import cors from 'cors';
import rutaApi from '../../presentation/routes/donaciones.routes.js';

export default class Server {
  public app: express.Application;
  public port: string | number;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;

    this.app.set('port', this.port);

    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(errorHandler);
    this.app.use('/api/v1/donaciones', rutaApi);

    
  }

  public init (){
    this.app.listen(this.app.get('port'), () => {
      console.log(`Donaciones API escuchando en puerto ${this.app.get('port')}`);
    });
  }
}