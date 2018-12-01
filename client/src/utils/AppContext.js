import React from "react";

export const AppContext = React.createContext({
  results: [],
  resultSearch: "",
  resultIndex: null,
  searchQuery: "people",
  handleSelect: () => {},
  selectQuery: () => {},
  handleInputChange: () => {},
  handleSubmit: () => {},
  handleDetails: () => {}
});
