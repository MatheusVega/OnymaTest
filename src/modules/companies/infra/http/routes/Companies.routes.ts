import { Router } from 'express';

import CompaniesController from '@modules/companies/infra/http/controllers/CompaniesController';

const companiesController = new CompaniesController();

const companiesRouter = Router();

companiesRouter.get('/', companiesController.index);
companiesRouter.get('/:id', companiesController.show);

companiesRouter.post('/', companiesController.create);
companiesRouter.post('/:id', companiesController.update);

companiesRouter.delete('/:id', companiesController.delete);

export default companiesRouter;
