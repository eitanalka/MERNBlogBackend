import express from 'express';

// Controller Imports

import postController from './controllers/postController';
import setupController from './controllers/setupController';

const routes = express();

routes.get('/', postController.getAll);

routes.get('/setupPosts', setupController.get);

routes.get('/posts', postController.getAll);
routes.get('/posts/:id', postController.get);
routes.post('/posts', postController.post);
routes.delete('/posts/:id', postController.delete);

export default routes;
