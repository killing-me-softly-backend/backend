import DataLoader from "dataloader";
import { Owner } from "../../generated/graphql";
import { OwnersService } from "./owners.service";
export declare function createOwnersLoader(ownersService: OwnersService): DataLoader<number, Owner, number>;
