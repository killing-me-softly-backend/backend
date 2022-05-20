export declare class EnumHelpers {
    static getNamesAndValues<T extends number>(e: any): {
        name: string;
        value: T;
    }[];
    static getNames(e: any): string[];
    static getValues<T extends number>(e: any): T[];
    static getSelectList<T extends number, U>(e: any, stringConverter: (arg: U) => string): Map<T, string>;
    static getSelectListAsArray<T extends number, U>(e: any, stringConverter: (arg: U) => string): {
        value: T;
        presentation: string;
    }[];
    private static getObjValues;
}
