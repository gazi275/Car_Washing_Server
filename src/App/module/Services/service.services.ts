import { Tservices } from "./service.interface";
import { Service } from "./service.model";

const creatservice = async (service: Tservices) => {
	const newService = await Service.create(service);
	return newService;
}

const getAllServices = async () => {
	const result = await Service.find({ isDeleted: false });
	return result;
}

const getSingleservice = async (id: string) => {
	const result = await Service.findById({ id, isDeleted: false });
	return result;
}

const updateService = async (id: string, service: Partial<Tservices>) => {
	const result = await Service.findByIdAndUpdate(id	, service, { new: true });
	return result;
}

const deleteService = async (id: string) => {
	const result = await Service.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
	return result;
}


export const services = {
    creatservice,
	getAllServices,
	getSingleservice,
	updateService,
	deleteService
}