import { render, screen } from "@testing-library/react";
import { ProgressBar, ProgressCircle } from "./progressBar";

describe("Progress components", () => {
	it("renders progress bar with correct width", () => {
		render(<ProgressBar value={50} showValue label="Progress bar label" />);
		const progress = screen.getByRole("progressbar");
		const label = screen.getByText("Progress bar label");

		expect(progress).toHaveAttribute("aria-valuenow", "50");
		expect(label).toBeInTheDocument();
	});

	it("renders progress bar with custom color", () => {
		render(<ProgressBar value={50} showValue color="#ffff00" />);
		const progress = screen.getByRole("progressbar");

		expect(progress).toHaveStyle("background-color: #ffff00");
	});

	it("renders circular progress with accessible value", () => {
		render(<ProgressCircle value={75} />);
		const progress = screen.getByRole("progressbar");
		expect(progress).toHaveAttribute("aria-valuenow", "75");
	});

	it("renders circular progress with custom color", () => {
		render(<ProgressCircle value={75} color="#ff00ff" />);
		const progress = screen.getByTestId("progressCircleIndicator");

		expect(progress).toHaveStyle("stroke: #ff00ff");
	});
});
