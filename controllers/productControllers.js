import { products } from "../data.js";

export const checkId = (req, res, next, id) => {
  const index = products.findIndex(
    (product) => product.id === +req.params.id
  );

  if (index === -1) {
    res.status(400).json({
      status: "Not found",
    });
    return;
  }
  res.locals.index = index
  next()

}

export const getAllProducts = (req, res) => {
  res.status(200).json({
    status: "success",
    data: { products },
  });
};

export const getProductById = (req, res) => {
  
  res.status(200).json({
    status: "success",
    data: { product: products[res.locals.index] },
  });
};

export const createProduct = (req, res) => {
  const newId = products[products.length - 1].id + 1;
  const newProduct = Object.assign({ id: newId }, req.body);
  products.push(newProduct);

  res.status(200).json({
    status: "success",
    data: { product: newProduct },
  });
};

export const deleteProduct = (req, res) => {

  products.splice(res.locals.index, 1);
  res.status(200).json({
    status: "success",
  });
};

export const updateProduct = (req, res) => {
  
  const updateProduct = Object.assign({ id: req.params.id }, req.body);
  products.splice(res.locals.index, 1, updateProduct);
  res.status(200).json({
    status: "success",
    data: { product: updateProduct },
  });
};
