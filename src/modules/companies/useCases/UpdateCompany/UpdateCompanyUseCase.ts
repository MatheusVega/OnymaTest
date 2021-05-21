import 'reflect-metadata';
import { inject, injectable } from 'tsyringe';

import ICompanyRepository from '@modules/companies/repositories/ICompanyRepository';
import ICompanyDTO from '@modules/companies/dtos/ICompanyDTO';
import IUpdateCompanyDTO from '@modules/companies/dtos/IUpdateCompanyDTO';

@injectable()
class UpdateCompanyUseCase {
    constructor(
        @inject('CompaniesRepository')
        private companyRepository: ICompanyRepository,
    ){}

    async execute(data: IUpdateCompanyDTO): Promise<ICompanyDTO>{
        let update_company: IUpdateCompanyDTO = {id: data.id};



        const company = await this.companyRepository.update(update_company,)

        return company;
    }
}

export default UpdateCompanyUseCase;
