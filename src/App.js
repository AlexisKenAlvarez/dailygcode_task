import React, { useState, useEffect } from "react";
// import { db } from "./firebase-config";
// import { collection, doc, getDocs } from "firebase/firestore";

// COMPONENTS
import Things from "./components/Things/Things";
import { ButtonSection } from "./components/Buttons/ButtonSection";
import { InputModal } from "./components/InputModal";
import { Submit } from "./components/Buttons/Submit";

const App = () => {

  // const [userData, setUserData] = useState([])
  // const userDataCol = collection(db, "userdata")

  // useEffect(() => {

  //   const getUsers = async () => {
  //     const data = await getDocs(userDataCol)
  //     setUserData(data.docs.map((items) => ({ ...items.data(), id: doc.id })))
  //   }

  //   getUsers()
  // }, [])

  return (
    <div className="bg-[#f6f6f6] h-screen w-screen pb-10">
      <div className="max-w-7xl mx-auto text-textCol overflow-x-hidden px-6 font-sans h-full">
        <Things />
        <ButtonSection />

        <InputModal id="wins" label="Did you have any wins today?" className="mt-7" mLeft="sm:ml-[-11rem]"/>
        <InputModal id="focus" label="Who did you focus your time on today?" className="mt-6" mLeft="sm:ml-[-6.8rem]"/>
        <InputModal id="lesson" label="What is the lesson you learned today?" className="mt-6"/>

        <Submit/>

      </div>
    </div>
  );
}

export default App;
