import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import ICompanyRepository from '@modules/companies/repositories/ICompanyRepository';

@injectable()
class DeleteCompanyUseCase {
    constructor(
        @inject('CompaniesRepository')
        private companyRepository: ICompanyRepository,
    ){}

    async execute(id: string): Promise<void>{
        await this.companyRepository.delete(id);
    }
}

export default DeleteCompanyUseCase;
