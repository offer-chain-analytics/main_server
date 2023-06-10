import { Express } from 'express';

import { interstateTransitionRoute } from './interstateTransitions';

export function servicesRoutes(app: Express): void {
  app.get('/analitics/interstatetransitions/:id', (req, res) => {
    const data = interstateTransitionRoute(req.params.id);

    res.send('data');
  });
}
