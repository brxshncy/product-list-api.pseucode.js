// Define a class for managing product data from different suppliers
class ProductManager {
    constructor() {
        this.suppliers = {}; // Object to store supplier instances
    }

    // Method to register a new supplier with its API format
    registerSupplier(supplierName, apiFormat, apiUrl) {
        // Instantiate Supplier class based on API format
        let supplier;
        switch (apiFormat) {
            case "SOAP":
                supplier = new SoapSupplier(supplierName, apiUrl);
                break;
            case "JSON":
                supplier = new JsonSupplier(supplierName, apiUrl);
                break;
            case "CSV":
                supplier = new CsvSupplier(supplierName, apiUrl);
                break;
            default:
                throw new Error("Unsupported API format");
        }
        this.suppliers[supplierName] = supplier;
    }

    // Method to fetch and normalize products from a supplier
    async fetchProductsFromSupplier(supplierName) {
        if (!this.suppliers[supplierName]) {
            throw new Error("Supplier not registered");
        }
        return await this.suppliers[supplierName].fetchProducts();
    }
}

// Define a base class for suppliers
class Supplier {
    constructor(name, apiUrl) {
        this.name = name;
        this.apiUrl = apiUrl;
    }

    async fetchProducts() {
        // Implement fetching logic in child classes
        throw new Error("Not implemented");
    }

    normalizeProducts(products) {
        // Implement normalization logic in child classes
        throw new Error("Not implemented");
    }
}

// Define child classes for different API formats
class SoapSupplier extends Supplier {
    async fetchProducts() {
        // Implement SOAP API fetching logic
        // Return products
    }

    normalizeProducts(products) {
        // Implement normalization for SOAP API
        // Return normalized products
    }
}

class JsonSupplier extends Supplier {
    async fetchProducts() {
        // Implement JSON API fetching logic
        // Return products
    }

    normalizeProducts(products) {
        // Implement normalization for JSON API
        // Return normalized products
    }
}

class CsvSupplier extends Supplier {
    async fetchProducts() {
        // Implement CSV API fetching logic
        // Return products
    }

    normalizeProducts(products) {
        // Implement normalization for CSV API
        // Return normalized products
    }
}

// Usage example
const productManager = new ProductManager();

// Register suppliers
productManager.registerSupplier(
    "Supplier1",
    "JSON",
    "http://supplier1.com/api/products"
);
productManager.registerSupplier(
    "Supplier2",
    "SOAP",
    "http://supplier2.com/api/products"
);

// Fetch and normalize products
productManager
    .fetchProductsFromSupplier("Supplier1")
    .then((products) => {
        // Display or process products
    })
    .catch((error) => {
        console.error(error);
    });
