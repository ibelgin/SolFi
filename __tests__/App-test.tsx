import "react-native";
import React from "react";
import App from "../App";

import { fireEvent, render, waitFor } from "@testing-library/react-native";

it("Renders Message", async () => {
  const { getByTestId, getByText, queryByTestId, toJSON } = render(<App name="Belgin" />);

  const button = getByText("Increase enthusiasm");
  fireEvent.press(button);

  await waitFor(() => expect(queryByTestId("name-printed")).toBeTruthy());

  expect(getByTestId("name-printed").props.children).toBe("Hello");
  expect(toJSON()).toMatchSnapshot();
});