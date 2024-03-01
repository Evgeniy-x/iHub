import {
  getDocs,
  collection,
  updateDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

import {
  saveAllItemsToStore,
  allItemsLoading,
  toggleItemInStore,
  addNewItemToStore,
  deleteItemFromStore,
} from "./actions";
import db from "../../firebase.config";

export const loadItems = () => async (dispatch) => {
  dispatch(allItemsLoading(true));
  const res = await getDocs(collection(db, "specialists"));
  dispatch(saveAllItemsToStore(res.docs.map((doc) => doc.data())));
  dispatch(allItemsLoading(false));
};

export const toggleItem = (newItem) => async (dispatch) => {
  dispatch(toggleItemInStore(newItem, newItem.id));
  await updateDoc(doc(db, "specialists", newItem.name), newItem);
};

export const addNewItem = (newItem) => async (dispatch) => {
  dispatch(addNewItemToStore(newItem));
  await setDoc(doc(db, "specialists", newItem.name), newItem);
};

export const deleteItem = (item) => async (dispatch) => {
  dispatch(deleteItemFromStore(item.id));
  await deleteDoc(doc(db, "specialists", item.name));
};
