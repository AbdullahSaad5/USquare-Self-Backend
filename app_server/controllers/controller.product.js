// controller.product.js

const Product = require('../models/model.product');

// Create a new product
exports.createProduct = async (req, res) => {
	try {
	  const product = new Product(req.body);
	  await product.save();
	  res.status(201).json({ message: 'Product created successfully', product });
	} catch (error) {
	  console.error('Error creating product:', error); // Detailed error log
	  res.status(500).json({ error: 'Failed to create product', details: error.message });
	}
  };
  

// Get all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single product by ID
exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Block or unblock a product
exports.blockProduct = async (req, res) => {
  console.log('Block product endpoint hit'); // Check if this is printed in your server console
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      console.log('Product not found');
      return res.status(404).json({ message: 'Product not found' });
    }

    product.blocked = !product.blocked; // Toggle the blocked status
    await product.save();

    res.status(200).json({ success: true, message: `Product ${product.blocked ? 'blocked' : 'unblocked'} successfully` });
  } catch (error) {
    console.error('Error updating product status:', error);
    res.status(500).json({ success: false, message: 'Error updating product status', error });
  }
};
