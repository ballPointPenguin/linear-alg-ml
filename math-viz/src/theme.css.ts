import {
	blue,
	blueDark,
	gray,
	grayDark,
	green,
	greenDark,
	red,
	redDark,
} from "@radix-ui/colors";
import { createTheme } from "@vanilla-extract/css";

export const [theme, vars] = createTheme({
	colors: {
		...gray,
		...blue,
		...red,
		...green,
	},
});

export const darkTheme = createTheme(vars, {
	colors: {
		...grayDark,
		...blueDark,
		...redDark,
		...greenDark,
	},
});
