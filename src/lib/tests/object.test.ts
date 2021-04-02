import { slugifyPropertyKey } from "../object";
test("test slugifyPropertyKey function", () => {
  expect(slugifyPropertyKey("lorem")).toBe(
    "lorem"
  );
  expect(slugifyPropertyKey("Ipsum")).toBe(
    "ipsum"
  );
  expect(slugifyPropertyKey("Vote #1")).toBe(
    "vote__1"
  );
  expect(
    slugifyPropertyKey("lorem", "custom.projet")
  ).toBe("lorem1_custom_projet");
  expect(
    slugifyPropertyKey("Vote #1", "custom.projet")
  ).toBe("vote__11_custom_projet");
});
