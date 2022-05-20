import { CatTypeEnum, CreateCatInput } from "../../../generated/graphql";
export declare class CreateCatDto implements CreateCatInput {
    age: number;
    ownerId?: number;
    type: CatTypeEnum;
}
