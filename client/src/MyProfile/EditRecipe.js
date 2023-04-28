// import React, { useState } from "react";
// import Entete from "../front/Entete";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllRecipes } from "../redux/actions";
// import { Button, Modal } from "react-bootstrap";

// const EditRecipe = ({ el }) => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const { Recipes } = useSelector((state) => state);
//   const [RecipeName, setRecipeName] = useState(Recipes.RecipeName);
//   const [ingredients, setIngredients] = useState(Recipes.ingredients);
//   const [photo, setphoto] = useState(Recipes.photo);
//   const [type_of_cuisine, setType_of_cuisine] = useState(
//     Recipes.setType_of_cuisine
//   );
//   const dispatch = useDispatch();

//   const handleEdit = (e) => {
//     e.preventDefault();
//     const editedRecipe = {
//       _id: el._id,
//       RecipeName,
//       ingredients,
//       photo,
//       type_of_cuisine,
//     };
//     dispatch(EditRecipe(editedRecipe));
//     handleClose();
//     dispatch(getAllRecipes());
//   };
//   return (
//     <div>
//       <Button variant="primary" onClick={handleShow}>
//         EDIT USER
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>edit users</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {" "}
//           <form action="" onSubmit={handleEdit}>
//             <div>
//               <label>Recipe Name</label>
//               <input
//                 type="text"
//                 value={RecipeName}
//                 onChange={(e) => {
//                   setRecipeName(e.target.value);
//                 }}
//               />
//             </div>
//             <div>
//               <label>ingredients</label>
//               <input
//                 type="text"
//                 value={ingredients}
//                 onChange={(e) => {
//                   setIngredients(e.target.value);
//                 }}
//               />
//             </div>
//             <div>
//               <label>photo</label>
//               <input
//                 type="text"
//                 value={photo}
//                 onChange={(e) => {
//                   setphoto(e.target.value);
//                 }}
//               />
//             </div>
//             <div>
//               <label>Type of cuisine</label>
//               <input
//                 type="text"
//                 value={type_of_cuisine}
//                 onChange={(e) => {
//                   setType_of_cuisine(e.target.value);
//                 }}
//               />
//             </div>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary" type="submit">
//               Save Changes
//             </Button>
//           </form>
//         </Modal.Body>
//         <Modal.Footer></Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default EditRecipe;
