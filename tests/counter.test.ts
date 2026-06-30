import { describe, it, expect, beforeEach } from "vitest";
import { setupCounter } from "../src/counter";

describe("setupCounter", () => {
  let button: HTMLButtonElement;

  beforeEach(() => {
    button = document.createElement("button");
  });

  it("should initialize the counter to 0", () => {
    setupCounter(button);

    expect(button.innerHTML).toBe("Count is 0");
  });

  it("should increment the counter when clicked", () => {
    setupCounter(button);

    button.click();
    expect(button.innerHTML).toBe("Count is ");

    button.click();
    expect(button.innerHTML).toBe("Count is 2");

    button.click();
    expect(button.innerHTML).toBe("Count is 3");
  });

  it("should only affect the button it is attached to", () => {
    const anotherButton = document.createElement("button");

    setupCounter(button);
    setupCounter(anotherButton);

    button.click();
    button.click();
    anotherButton.click();

    expect(button.innerHTML).toBe("Count is 2");
    expect(anotherButton.innerHTML).toBe("Count is 1");
  });
});