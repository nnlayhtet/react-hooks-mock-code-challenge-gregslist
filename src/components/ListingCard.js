import React,{useState} from "react";

function ListingCard({id, description, image, location, onDelete}) {

  const [liked,setLiked]=useState(true)

  function handleDelete(){
    fetch(`http://localhost:6001/listings/${id}`,{
      method: "DELETE",
  })
    onDelete(id)
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {liked ? (
          <button className="emoji-button favorite active" onClick={()=>setLiked(false)}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={()=>setLiked(true)}>☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
