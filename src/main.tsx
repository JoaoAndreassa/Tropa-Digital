import { createRoot } from "react-dom/client";
import { UserProvider } from "./context/UserContext";

import "./styles/global.scss";
import React from "react";
import { AppRoutes } from './routes/AppRoutes';

createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<UserProvider>
			<AppRoutes />
		</UserProvider>
	</React.StrictMode>
);
