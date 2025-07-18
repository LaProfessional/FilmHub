import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import { Button } from "./button";

test("should render text in button", async () => {
  const { getByText } = render(<Button>Tank!</Button>);

  await expect.element(getByText("Tank!")).toBeInTheDocument();
});
