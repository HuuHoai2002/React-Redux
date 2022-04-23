import React from "react";

const HobbyList = ({ hobbyList, activeID, onClick }) => {
  const handleClick = (hobby) => {
    if (onClick) {
      onClick(hobby);
    }
  };
  return (
    <div>
      <ul style={{ transition: "all 0.2s" }}>
        {hobbyList.length > 0 &&
          hobbyList.map((item) => (
            <li
              key={item.id}
              style={
                item.id === activeID
                  ? { color: "red", cursor: "pointer" }
                  : { color: "black", cursor: "pointer" }
              }
              onClick={() => handleClick(item)}>
              {item.id + "/" + item.title}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default HobbyList;
