import { Button, TextField, List, ListItem, ListItemText } from "@mui/material";
import React, { useState } from "react";

export default function Todolist() {
  const [myList, setMyList] = useState([]);
  const [addTxt, setAddTxt] = useState("");

  const generateId = () => {
    return (
      new Date().getTime().toString() +
      Math.random().toString(36).substring(2, 9)
    );
  };

  const handleRemove = (id) => {
    setMyList((prev) => prev.filter((item) => item.id != idToRemove))
  };

  return (
    <div style={{ margin: "20px" }}>
      <TextField
        sx={{ mt: 5, width: "100%" }}
        label="Add a new task"
        value={addTxt}
        onChange={(e) => setAddTxt(e.target.value)}
        variant="outlined"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setMyList((prev) => [...prev, { text: addTxt, id: generateId() }]);
            setAddTxt("");
          }}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => { setMyList([]) }}
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="error"
          onClick={() => setMyList([])}
        >
          Remove
        </Button>
      </div>
      <List sx={{ mt: 3 }}>
        {myList.map((item, index) => (
          <ListItem key={item.id}>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
