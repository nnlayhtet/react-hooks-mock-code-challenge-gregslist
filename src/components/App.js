import React, {useState,useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings,setListings] = useState([])
  const [resetListings, setResetListing] = useState(false)

  useEffect(()=>{
    fetch(`http://localhost:6001/listings`)
      .then(res=>res.json())
      .then(data=>setListings(data))
  },[resetListings])

  function onDelete(id){
    const newListings= listings.filter((listing)=>listing.id!==id)
    setListings(newListings)
  }

  function onSearchSubmitItem(searchValue){    
    const newListings = listings.filter((listing)=>{
    if (searchValue==='') {resetListings?setResetListing(false):setResetListing(true)}
    return listing.description.toLowerCase().includes(searchValue.toLowerCase())})
    setListings(newListings)
  }


  return (
    <div className="app">
      <Header onSearchSubmit={onSearchSubmitItem}/>
      <ListingsContainer listings={listings} onDelete={onDelete}/>
    </div>
  );
}

export default App;
