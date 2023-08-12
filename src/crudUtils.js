// crudUtils.js
import fs from "fs";
// import path from "path";

const dataPath = fs.readFileSync("data.json");

// Function to read data from the JSON file
export const readData = () => {
  try {
    const data = fs.readFileSync(dataPath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    console.error("Error reading data:", error);
    return null;
  }
};

// Function to write data to the JSON file
export const writeData = (data) => {
  try {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), "utf-8");
  } catch (error) {
    console.error("Error writing data:", error);
  }
};

// Function to get all items
export const getAllItems = () => {
  const data = readData();
  return data ? data.items : [];
};

// Function to add a new item
export const addItem = (item) => {
  const data = readData();
  if (data) {
    const newItem = { ...item, id: data.items.length + 1 };
    data.items.push(newItem);
    writeData(data);
    return newItem;
  }
};

// Function to update an existing item
export const updateItem = (item) => {
  const data = readData();
  if (data) {
    const index = data.items.findIndex((i) => i.id === item.id);
    if (index !== -1) {
      data.items[index] = item;
      writeData(data);
      return item;
    }
  }
};

// Function to delete an item
export const deleteItem = (id) => {
  const data = readData();
  if (data) {
    const index = data.items.findIndex((i) => i.id === id);
    if (index !== -1) {
      data.items.splice(index, 1);
      writeData(data);
      return true;
    }
  }
  return false;
};
