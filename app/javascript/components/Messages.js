import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../store/messagesReducer";

const Messages = () => {
  const dispatch = useDispatch();
  const msg = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(fetchMessages());
  }
  , [dispatch]);

  return (
    <div>
        <div>{msg.message}</div>
    </div>);
};

export default Messages;