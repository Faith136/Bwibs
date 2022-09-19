import React from 'react';
import { categories } from './Utilis/Data';
import { useState } from 'react';
import { MdRestaurant, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from "react-icons/md";
import Loader from "./Loader";
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import { storage } from './fire';
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "./fire";
//import { useStateValue } from "./Utilis/StateProvider";
//import { actionType } from "./Utilis/reducer";
//import { getAllFoodItems } from "./firefunctions";


function Createitem() {
  const [title, setTitle] = useState("");
  const [setCategory] = useState(null);
  const [fields, setFields] = useState(false);
  const [alertstatus, setAlertStatus] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [imageAsset, setimageAsset] = useState();
  const [price, setPrice] = useState();
  const [msg, setMsg] = useState();
  const [calories, setCalories] = useState();
  


const uploadImage = (e) => {
  setisLoading(true);
  const imageFile = e.target.files[0];
  const storageRef = ref(storage, `Images/${Date.now}-${imageFile.name}`)
  const uploadTask = uploadBytesResumable(storageRef, imageFile);

  uploadTask.on('state_changed', (snapshot) => {
  }, (error) => {
    console.log=(error);
    setFields(true);
    setAlertStatus('danger')
    setTimeout(() => {
      setFields(false)
      setisLoading(false)
    }, 4000);
  }, ()=> {
    getDownloadURL(uploadTask.snapshot.ref).then(downloadUrl => {
      setimageAsset(downloadUrl)
      setisLoading(false)
      setFields(true);
      setMsg('Image uploaded successfully')
      setAlertStatus('success')
      setTimeout(() => {
        setFields(false)
      }, 4000);
    })
  })
};

const deleteImage = () => {
  setisLoading(false);
  const deleteRef = ref(storage, imageAsset);
  deleteObject(deleteRef).then(() => {
    setimageAsset(null)
    setFields(true);
    setMsg('Image deleted successfully')
    setAlertStatus('success')
    setTimeout(() => {
      setFields(false)
    },4000);
  });
};

const saveDetails = () => {
  setisLoading(true);
  try {
    if((!title || !calories || !imageAsset || !price)){
      setFields(true);
      setMsg('Required fields cant be empty')
      setAlertStatus('danger')
      setTimeout(() => {
        setFields(false)
        setisLoading(false)
      }, 4000);
    } else{
      const data = {
        id : `${Date.now}`,
        title : title,
        imageUrl : imageAsset,
        calories : calories,
        qty : 1,
        price : price, 
      
      }
     const saveItem = async(data) => {
        await setDoc(
            doc(firestore, "foodItems", `${Date.now()}`), data, {
                merge: true,
            });
    };
      saveItem(data);
      setisLoading(false);
      setFields(true);
    setMsg('Data uploaded successfully');
    clearData();
    setAlertStatus('success');
    setTimeout(() => {
      setFields(false);
      
    },4000);
  
    }
  } catch (error) {
    console.log=(error);
    setFields(true);
    setAlertStatus('danger');
    setTimeout(() => {
      setFields(false);
      setisLoading(false);
    }, 4000);
  }
  
};





const clearData = () => {
  setTitle("");
  setimageAsset("");
  setCalories("");
  setCalories("Select Category");
  setPrice("");
}



  return (
    <div className='w-full min-h-screen flex items-center justify-center'>
<div className='w-[75%] border gap-4 border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center'>
      {
        fields &&  (
          <p className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertstatus === "danger" ?  
          'bg-red-700 text-red-400' :'bg-emerald-400 text-emerald-800'}`}>
           {msg}</p>
          
        )
      }
      <div className='w-full py-2 border-b border-gray-300 items-center gap-2'>
            <MdRestaurant className='text-xl text-gray-700' />
<input type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Give me a title"
          className='w-full h-full text-lg bg-transparent font-semibold placeholder:text-gray-500
          text-textcolor'
          />
      </div>
      <div className="w-full">
        <select onChange={(e) => setCategory(e.target.value)} className='outline-none w-full 
        text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'> 
          <option value="other" className='bg-white'>Select Category</option>
          {categories && categories.map(item => (
            <option key={item.id} className="text-base border-0 capitalize bg-white"
            value={item.urlParamName}>{item.name}
            </option>
          ))}
        </select>
        </div>
        <div className="group flex justify-center item-center flex-col border-2 border-dotted
        border-gray-300 w-full h-56 rounded-lg md:h-72 cursor-pointer">
        {isLoading ? <Loader className="items-center justify-center"/> : <>
              {!imageAsset ? <>
              <label className='w-full h-full flex flex-col items-center justify-center
               cursor-pointer'>
                <div className="w-full h-full flex flex-col items-center justify-center
               cursor-pointer gap-2">
                <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700' />
                <p className='text-gray-500  hover:text-gray-700'>Click here to upload</p>
                </div>
                <input type="file" name="uploadImage" accept='image/*'
                onChange={uploadImage} className='w-0 h-0' />
               </label>
              </>:<>
              <div className="relative h-full">
                <img src={imageAsset} alt="uploaded" className='w-full h-full object-cover' />
                <button type='button' className='absolute bottom-3 right-3 p-3 rounded-full
                bg-red-500 text-xl outline-none hover:shadow-md duration-500 
                transition-all ease-in-out' onClick={deleteImage}>
                  <MdDelete className='text-white' />
                </button>
              </div>
              </> }
        </>}
                 
      </div>
      <div className="w-full flex flex-col md:flex-row items-center gap-3">
       <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
        <MdFoodBank />
       <input type="text" required value={calories} onChange={(e) => setCalories(e.target.value)}
       placeholder="Description"
       className='w-full h-full text-lg bg-transparent outline-none border-none 
       placeholder:text-gray-400 text-textcolor'
       /></div>
</div>
       <div className="w-full flex flex-col md:flex-row items-center gap-3">
       <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
        <MdAttachMoney />
       <input type="text" required value={price} onChange={(e) => setPrice(e.target.value)}
       placeholder="price"
       className='w-full h-full text-lg bg-transparent outline-none border-none 
       placeholder:text-gray-400 text-textcolor'
       /></div>
      </div>
      <div className="flex items-center w-ull ">
        <button type='button' className='ml-0 md:ml-auto w-full md:w-auto border-none
        outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold'
        onClick={saveDetails}>Save</button>
      </div>
      </div>
    </div>
  )
}

export default Createitem