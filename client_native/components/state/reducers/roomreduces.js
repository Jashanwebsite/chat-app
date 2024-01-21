const roomreducer = (state = { room_id: null }, action) => {
  console.log("State:", state);
  console.log("Action:", action);
  if (action.type === "login_room_id") {
    console.log("action.data", state.room_id);
    return { room_id: action.data }; // Return a new object with the updated room_id
  } else if (action.type === "logout_room_id") {
    return { room_id: null }; // Set the state to an object with room_id set to null when logging out
  }

  return state;
};

export default roomreducer;
