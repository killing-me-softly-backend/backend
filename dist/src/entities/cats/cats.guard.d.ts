import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class CatsGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}
