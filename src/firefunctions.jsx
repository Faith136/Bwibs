import { getDoc, orderBy, query, collection } from "firebase/firestore";
import { firestore } from "./fire";

//saving new item
export const getAllFoodItems = async () => {
    const items = await getDoc(
        query(collection(firestore, "foodItems"), orderBy("id", "desc"))
    );

    return items.docs.map((doc) => doc.data());
};