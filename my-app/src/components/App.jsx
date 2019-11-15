import React from 'react';
import '../scss/style-new.scss';
import Routes from '../components/Router'
// import app from "./Firebase";
// import { useCollection } from "react-firebase-hooks/firestore";
const App = () => {
  // const [allProducts] = useCollection(app.firestore().collection("Productos"), {
  //   snapshotListenOptions: { includeMetadataChanges: true }
  // });
  // console.log(allProducts.docs.map)
  return (
      <div>
        <Routes/>
      </div>
  )
}

export default App;
