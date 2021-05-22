import firebase from 'firebase';
import firebaseDatabase from '@shared/infra/firebase';

const uuidv4 = require('uuidv4');
import ICompanyDTO from '@modules/companies/dtos/ICompanyDTO';

import ICompanyRepository from '@modules/companies/repositories/ICompanyRepository';
import ICreateCompanyDTO from '@modules/companies/dtos/ICreateCompanyDTO';
import IUpdateCompanyDTO from '@modules/companies/dtos/IUpdateCompanyDTO';

class CompaniesRepository implements ICompanyRepository {
    private database : firebase.database.Database;

    private url: string;

    constructor() {
        this.database = firebaseDatabase;
        this.url = 'companies/';
      }

    public async create({
        name,
        companyName,
        cnpj,
        group,
        riskLevel,
        district,
        cep,
        city,
        complement,
        address
        
        }: ICreateCompanyDTO): Promise<ICompanyDTO> {
          console.log(uuidv4())
        const id  = uuidv4();
        const data = {
            id,
            name,
            companyName,
            cnpj,
            group,
            riskLevel,
            district,
            cep,
            city,
            complement,
            address,
        };

        await this.database.ref(this.url + id).set(data);

        return Object.assign(data, { id });
    }

    public async findById(id: string): Promise<ICompanyDTO | null> {
        const companySnapshot = await this.database
          .ref(this.url + id)
          .once('value');
    
        const companyData = companySnapshot.val();
    
        const company = companyData
          ? Object.assign(companyData, { id })
          : null;
    
        return company;
    }

    public async findAll(): Promise<ICompanyDTO[]> {
        const companySnapshot = await this.database
          .ref(this.url)
          .once('value');
    
        const companiesData = companySnapshot.val();
    
        const companiesIds = Object.keys(companiesData);
    
        const companies = companiesIds.map(id => {
          return {
            id,
            ...companiesData[id],
          };
        });
    
        return companies;
      }

      public async update(
        company: IUpdateCompanyDTO,
      ): Promise<ICompanyDTO> {
        const { id } = company;
    
        await this.database.ref(this.url + id).update(company);
    
        return Object.assign(company, { id }) as ICompanyDTO;
      }

      public async delete(id: string): Promise<void> {
        await this.database.ref(this.url + id).remove();
      }

}

export default CompaniesRepository;