import DataLoader from "dataloader";
import { Cat, Owner } from "../../generated/graphql";
export declare class CatOwnerResolver {
    constructor();
    owner(cat: Cat & {
        ownerId: number;
    }, ownersLoader: DataLoader<number, Owner>): Promise<Owner>;
}
