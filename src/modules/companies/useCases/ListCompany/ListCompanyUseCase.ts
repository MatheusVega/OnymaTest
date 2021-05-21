import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import ICompanyRepository from '@modules/companies/repositories/ICompanyRepository';
import ICompanyDTO from '@modules/companies/dtos/ICompanyDTO';

@injectable()
class ListCompanyUseCase{
    constructor(
        @inject('CompaniesRepository')
        private companyRepository: ICompanyRepository,
    ){}

    async execute():Promise<ICompanyDTO[]>{
        const company = await this.companyRepository.findAll();
        
        return company;
    }
}

export default ListCompanyUseCase;
