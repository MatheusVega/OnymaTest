import ICompanyDTO from './ICompanyDTO';

type ICreateAppointmentDTO = Omit<ICompanyDTO, 'id'>;

export default ICreateAppointmentDTO;
