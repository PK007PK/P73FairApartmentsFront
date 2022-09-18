import React, { FormEvent, useContext, useState } from "react";
import AppContext from "src/AppProvider";
import { CommonProps } from "src/types/commonProps";

interface Props extends CommonProps {}

export const SearchApartment: React.FunctionComponent<Props> = (
  props
): JSX.Element => {
  const { style } = props;
  const { search, setSearch } = useContext(AppContext);
  const [inputVal, setInputVal] = useState<string>(search);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSearch(inputVal);
    setInputVal("");
  };

  return (
    <form onSubmit={handleSubmit} style={style}>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
};
