import { Logger } from "winston";
import { DalService } from "../../dal/dal.service";
import { Cat } from "../../generated/graphql";
import { CreateCatDto } from "./dto/create-cat.dto";
export declare class CatsService {
    private logger;
    private dalService;
    private knex;
    constructor(logger: Logger, dalService: DalService);
    create(cats: CreateCatDto[]): Promise<Cat[]>;
    findAll(): Promise<Cat[]>;
    findOneById(id: number): Promise<Cat>;
}
