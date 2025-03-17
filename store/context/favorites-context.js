import { createContext } from "react";

export const FavoritesContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }) {
	const addFavoriteHandler = (id) => {
		// Implement me
	};

	const removeFavoriteHandler = (id) => {
		// Implement me
	};

	return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>;
}
