import React, {useState} from "react";

function Search({onSubmit}) {

  const [searchItem, setSearchItem] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    //console.log(searchItem);
    onSubmit(searchItem)

  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
