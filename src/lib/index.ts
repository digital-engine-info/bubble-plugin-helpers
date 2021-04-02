export * from "./mock";
export * from "./object";
export * from "./debug";

export class BubbleHelpers {
  constructor() {
    console.log("Library constructor loaded");
  }

  myMethod = (): boolean => {
    console.log("Library method fired");
    return true;
  };
}

export default BubbleHelpers;
