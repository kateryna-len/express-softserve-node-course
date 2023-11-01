import express from "express";
import userRouter from "./routes/userRoutes.js";
import productRouter from "./routes/productRoutes.js";
// import {
//   getAllProducts,
//   getProductById,
//   createProduct,
//   deleteProduct,
//   updateProduct,
// } from "./controllers/productControllers.js";
// import {
//   getAllUsers,
//   getUserById,
//   createUser,
//   deleteUser,
//   updateUser,
// } from "./controllers/userControllers.js";

const app = express();

app.use(express.json());

//1

// app.get("/products", getAllProducts);

// app.get("/products/:id", getProductById);

// app.post("/products", createProduct);

// app.delete("/products/:id", deleteProduct);

// app.put("/products/:id", updateProduct);

//2

// app.route("/products").get(getAllProducts).post(createProduct);
// app
//   .route("/products/:id")
//   .get(getProductById)
//   .delete(deleteProduct)
//   .put(updateProduct);

//1

// app.get("/users", getAllUsers);

// app.get("/users/:id", getUserById);

// app.post("/users", createUser);

// app.delete("/users/:id", deleteUser);

// app.put("/users/:id", updateUser);

//2

// app.route("/users").get(getAllUsers).post(createUser);
// app.route("/users/:id").get(getUserById).delete(deleteUser).put(updateUser);

app.use("/products", productRouter);

app.use("/users", userRouter);
const port = 3000;

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
