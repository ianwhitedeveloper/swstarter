import React from "react";

export const AppContext = React.createContext({
  results: [],
  resultSearchQuery: "",
  resultIndex: null,
  searchQuery: "people",
  handleSelect: () => {},
  selectQuery: () => {},
  handleInputChange: () => {},
  handleSubmit: () => {},
  handleDetails: () => {}
});
