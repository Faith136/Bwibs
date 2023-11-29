import React, {useState, useEffect} from 'react'
import { collection,  getDocs,  updateDoc,  deleteDoc,  doc } from "firebase/firestore"
import { db } from './fire';
import { Outlet } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom'
//import { collection, onSnapshot } from 'firebase/firestore';

 export default function Details({totalprice, item }) {



  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  
  const Update = async (id) => {
    const userDoc = doc(db, "users", id);
   await updateDoc(userDoc);
   alert("Order confirmed");
  };

  const Delete = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    alert("Order deleted")
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (   
   <div class="flex flex-col">
    
   <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
     <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
       <div class="overflow-x-auto">
         <table class="min-w-full">
           <thead class="border-b">
             <tr>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Name
               </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Email Address
               </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Food Ordered
               </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Table Reservation
               </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Total
               </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Payments
               </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Contacts
               </th>
               <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                 Action
               </th>
             </tr>
           </thead>
           
           <tbody>
           {users.map((user) => {
            return (
             <tr class="border-b">
               <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.Username}</td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 {user.email}
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 {item.quantity}
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {user.tablereserved}
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 {totalprice}
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                 {user.date}
               </td>
               <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {user.contacts}
                  </td>
                  <td class="text-sm text-gray-900 font-light px-6 space-x-3 py-4 whitespace-nowrap">
                <button className='bg-green-500 rounded-md'
                onClick={() => {
                  Update(user.id, user.name);
                }}
                >CONFIRM</button>
                <button className='bg-red-500 rounded-md'
                onClick={() => {
                  Delete(user.id);
                }}
              >DELETE</button>
                  </td>
              </tr>
             )})}
           </tbody>          
         </table>         
</div>
</div>
</div>
<div><Outlet /></div>
</div>
) 
 }