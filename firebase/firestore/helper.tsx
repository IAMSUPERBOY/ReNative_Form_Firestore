import { getFirestore } from "firebase/firestore";
import {firebase} from "../index";
import { addDoc, collection } from "firebase/firestore"; 

const db=getFirestore(firebase);
async function test()
{
    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Alan",
          middle: "Mathison",
          last: "Turing",
          born: 1912
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}
async function writeQnA(Que_Ans:JSON)
{
  try
  {
    const docRef=await addDoc(collection(db,'QA'),
    {
      Que_Ans
    });
    console.log(docRef.id);
  }catch(error)
  {
    console.log(error);
  }
}
export {writeQnA};
