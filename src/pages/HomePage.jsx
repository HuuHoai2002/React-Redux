import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewHobby, setActiveHobby } from "../actions/hobby";
import HobbyList from "../components/Home/HobbyList";

const HomePage = () => {
  const randomID = () => Math.trunc(Math.random() * 9999);
  // useSelector() nhận vào state , state này chính là thằng rootReducer(có key là hobby ...)
  const hobbyList = useSelector((state) => state.hobby.list);
  const activeID = useSelector((state) => state.hobby.activeID);

  // Nếu gom lại ntn: nếu redux store thay đổi => useSelector chạy lại => vì nó return lại 1 object => tạo ra tham chiếu mới
  // const hobbyState = useSelector((state) => ({
  //   list: state.hobby.list,
  //   activeID: state.hobby.activeID,
  // }));
  // dispatch với useDispatch()
  const dispatch = useDispatch();

  const handleAddHobby = () => {
    // random a hobby object: id + title
    const newID = randomID();
    const newHobby = {
      id: newID,
      title: `Hobby ${newID}`,
    };
    //dispatch actions
    const action = addNewHobby(newHobby);
    dispatch(action);
  };
  const handleHobbyClick = (hobby) => {
    console.log(hobby);
    const action = setActiveHobby(hobby);
    dispatch(action);
  };
  console.log(hobbyList);
  return (
    <div>
      <h1>Redux Trong ReactJS</h1>
      <button onClick={handleAddHobby}>Random Hobby</button>
      <HobbyList
        hobbyList={hobbyList}
        activeID={activeID}
        onClick={handleHobbyClick}></HobbyList>
    </div>
  );
};

export default HomePage;
