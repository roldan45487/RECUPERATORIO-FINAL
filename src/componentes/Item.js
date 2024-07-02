import React from "react";

export default function Item(props) {
  const handleClick = () => {
    props.selectFavoritePlatform(props.platformName);
  };

  return <li onClick={handleClick}>{props.platformName}</li>;
}
