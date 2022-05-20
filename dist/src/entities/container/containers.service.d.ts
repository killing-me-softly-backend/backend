import { DalService } from "../../dal/dal.service";
import { ContainerDto } from "../../dal/dal.types";
import { Container, ContainersFilter } from "../../generated/graphql";
import { ItemsService } from "../items/items.service";
export declare class ContainerService {
    private dalService;
    private itemsService;
    constructor(dalService: DalService, itemsService: ItemsService);
    getByIds(ids: readonly string[]): Promise<ContainerDto[]>;
    getByFilter(filter?: ContainersFilter): Promise<Container[]>;
}
