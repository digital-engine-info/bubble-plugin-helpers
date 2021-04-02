export function slugifyPropertyKey(
  propertyKey: string,
  objectType: string = null
) {
  let result = propertyKey.toLowerCase();
  result = result.replace(/([ .#])/g, "_");
  if (objectType) {
    const objectTypeSlug = slugifyPropertyKey(objectType);
    result = `${result}1_${objectTypeSlug}`;
  }
  return result;
}
