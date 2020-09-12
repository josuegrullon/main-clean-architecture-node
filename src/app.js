import express from 'express';
import { urlencoded, json } from 'body-parser';
import routes from './frameworks/web/routes';
import projectDependencies from './config/projectDependencies';
import ErrorHandler from './frameworks/common/ErrorHandler';

const app = express();
const port = process.env.PORT || 3000;
// load app only if db is alive and kicking
projectDependencies.DatabaseService.initDatabase().then(() => {

    // load middlewares
    app.use(urlencoded({ extended: true }));
    app.use(json());

    // load routes
    app.use('/api', routes(projectDependencies));

    // generic error handler
    app.use(ErrorHandler);

    // eslint-disable-next-line arrow-body-style
    app.listen(port, () => console.log(`http://localhost:${port}`));

}, (err) => {
    console.log(`db is not ready, err:${err}`);
});
