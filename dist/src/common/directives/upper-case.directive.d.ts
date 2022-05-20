import { SchemaDirectiveVisitor } from "@graphql-tools/utils";
import { GraphQLField } from "graphql";
export declare class UpperCaseDirective extends SchemaDirectiveVisitor {
    visitFieldDefinition(field: GraphQLField<any, any>): void;
}
