//action creater .js
  export const login_room_id = (room_id) => {
    return  {
        type: "login_room_id", // Corrected action type
        data: room_id, // Corrected payload
      }
  };
  export const logout_room_id = (room_id) => {
    return {
        type: "logout_room_id", // Corrected action type
        data:room_id
    };
  };