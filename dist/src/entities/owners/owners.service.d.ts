import { Knex } from "knex";
import { Owner } from "../../generated/graphql";
export declare class OwnersService {
    private readonly knex;
    constructor(knex: Knex);
    findByIds(ids: readonly number[]): Promise<Owner[]>;
}
