import { ArgumentsHost, HttpException } from "@nestjs/common";
import { GqlExceptionFilter } from "@nestjs/graphql";
export declare class GqlExceptionStackTraceFilter implements GqlExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): HttpException;
}
