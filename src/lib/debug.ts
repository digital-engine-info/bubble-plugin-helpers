import { BubbleObject } from "./mock";

export const getDebugInfo = (element: BubbleObject, stringify = true) => {
  const info = element.listProperties().reduce((acc, val) => {
    acc[val] = element.get(val);
    return acc;
  }, {});
  return stringify ? JSON.stringify(info, null, 2) : info;
};
