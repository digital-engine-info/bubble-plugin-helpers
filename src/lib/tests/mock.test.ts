import {
  ListObjectMock,
  ObjectMock,
} from "../mock";

describe("Test ObjectMock class", () => {
  test("ObjectMock with custom builder", () => {
    const mockedObject = new ObjectMock(() => ({
      lorem: "ipsum",
      sin: "dolor",
    }));
    expect(mockedObject.get("lorem")).toBe(
      "ipsum"
    );
    expect(mockedObject.get("sin")).toBe("dolor");
    expect(
      mockedObject.listProperties()
    ).toStrictEqual(["lorem", "sin"]);
  });
  test("ObjectMock with default builder", () => {
    const mockedObject = new ObjectMock();
    expect(
      mockedObject.listProperties()
    ).toStrictEqual([
      "_id",
      "Slug",
      "Created By",
      "Created Date",
      "Modified Date",
    ]);
  });
});

test("Test ListObjectMock class", () => {
  let i = 0;
  const loremIpsumBuilder = () => ({
    index: i++,
    lorem: "ipsum",
    sin: "dolor",
  });
  const mockedList = new ListObjectMock(
    2,
    loremIpsumBuilder
  );
  const objects = mockedList.get(0, 2);
  expect(mockedList.length()).toBe(2);
  expect(objects).toHaveLength(2);
  expect(objects[0].get("lorem")).toBe("ipsum");
  expect(objects[0].get("index")).toBe(0);
});
