import { Cat } from "../../generated/graphql";
import { CatsService } from "./cats.service";
import { CreateCatDto } from "./dto/create-cat.dto";
export declare class CatsResolver {
    private readonly catsService;
    constructor(catsService: CatsService);
    getCats(): Promise<Cat[]>;
    findOneById(id: number): Promise<Cat>;
    create(args: CreateCatDto[]): Promise<Cat[]>;
    catCreated(): AsyncIterator<unknown, any, undefined>;
}
