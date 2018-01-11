import { initializeIcons } from "@uifabric/icons";
import { loadTheme } from "office-ui-fabric-react";

export const initializeOfficeFabric = () => {
	initializeIcons();
	loadTheme({
		palette: {
			themePrimary: "#008272",
		},
	});
};
