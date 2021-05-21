import { container } from 'tsyringe';

import FirebaseCompanyRepository from '@modules/companies/infra/firebase/repositories/CompaniesRepository';
import ICompanyRepository from '@modules/companies/repositories/ICompanyRepository';

container.registerSingleton<ICompanyRepository>(
    'CompaniesRepository',
    FirebaseCompanyRepository,
);
