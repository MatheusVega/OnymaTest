import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import ICompanyRepository from '@modules/companies/repositories/ICompanyRepository';
import ICompanyDTO from '@modules/companies/dtos/ICompanyDTO';

@injectable()
class ShowCompanyUseCase{
    constructor(
        @inject('CompaniesRepository')
        private companyRepository: ICompanyRepository,
    ){}

    async execute(id: string): Promise<ICompanyDTO | null>{
        const company = await this.companyRepository.findById(id);

        return company;
    }
}

export default ShowCompanyUseCase;
