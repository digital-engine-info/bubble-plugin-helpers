export declare function baseObjectBuilder(): {
    _id: string;
    Slug: string;
    "Created By": string;
    "Created Date": string;
    "Modified Date": string;
};
export declare type BuilderFunction = () => Record<string, any>;
export interface BubbleObject {
    get: (fieldName: string) => any;
    listProperties: () => string[];
}
export interface BubbleObjectList {
    get: (start: number, length: number) => BubbleObject[];
    length: () => number;
}
export declare class ObjectMock implements BubbleObject {
    _fields: {};
    constructor(objectBuilder?: BuilderFunction);
    get: (fieldName: string) => any;
    listProperties: () => string[];
}
export declare class ListObjectMock implements BubbleObjectList {
    _objects: ObjectMock[];
    constructor(length: number, objectBuilder?: BuilderFunction);
    length: () => number;
    get: (start: number, length: number) => ObjectMock[];
}
