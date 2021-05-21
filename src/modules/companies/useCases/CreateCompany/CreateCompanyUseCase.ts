import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import ICompanyRepository from '@modules/companies/repositories/ICompanyRepository';
import ICompanyDTO from '@modules/companies/dtos/ICompanyDTO';
import IcreateCompanyDTO from '@modules/companies/dtos/ICreateCompanyDTO';

@injectable()
class CreateCompanyUseCase{
    constructor(
        @inject('CompaniesRepository')
        private companiesRepository: ICompanyRepository,
    ){}

    async execute(data: IcreateCompanyDTO): Promise<ICompanyDTO>{
        console.log("teste");
        const company = await this.companiesRepository.create(data)

        return company;
    }
}

export default CreateCompanyUseCase;
