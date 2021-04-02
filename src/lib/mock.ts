function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export function baseObjectBuilder() {
  return {
    _id: uuidv4(),
    Slug: <string>null,
    "Created By": "admin_user_bubble_project",
    "Created Date": "2021-03-27T21:59:57.581Z",
    "Modified Date": "2021-03-28T09:41:59.126Z",
  };
}

export type BuilderFunction = () => Record<string, any>;

export interface BubbleObject {
  get: (fieldName: string) => any;
  listProperties: () => string[];
}

export interface BubbleObjectList {
  get: (start: number, length: number) => BubbleObject[];
  length: () => number;
}

export class ObjectMock implements BubbleObject {
  _fields = {};
  constructor(objectBuilder: BuilderFunction = baseObjectBuilder) {
    this._fields = objectBuilder();
  }
  get = (fieldName: string) => this._fields[fieldName];
  listProperties = () => Object.keys(this._fields);
}

export class ListObjectMock implements BubbleObjectList {
  _objects: ObjectMock[] = [];
  constructor(length: number, objectBuilder: BuilderFunction = undefined) {
    for (let i = 0; i < length; i++) {
      this._objects.push(new ObjectMock(objectBuilder));
    }
  }
  length = () => this._objects.length;
  get = (start: number, length: number) =>
    this._objects.slice(start, start + length);
}
