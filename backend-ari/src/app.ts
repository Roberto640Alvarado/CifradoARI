import express from 'express';
import passport from 'passport';
import cors from 'cors';
import morgan from 'morgan';

import conversionRoutes from './routes/conversion.routes';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());

app.get('/', (req, res) => {
    return res.send(`The API is at http://localhost:${app.get('port')} for ARI`);
});

app.use('/conversion', conversionRoutes);

export default app;

