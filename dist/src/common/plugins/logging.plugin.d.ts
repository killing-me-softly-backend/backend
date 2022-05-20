import { GraphQLRequestContext } from "apollo-server-core";
import { ApolloServerPlugin, GraphQLRequestListener } from "apollo-server-plugin-base";
import { Logger } from "winston";
export declare class LoggingPlugin implements ApolloServerPlugin {
    private logger;
    constructor(logger: Logger);
    requestDidStart(requestContext: GraphQLRequestContext): Promise<GraphQLRequestListener>;
}
