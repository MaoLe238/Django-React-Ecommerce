# Django React Ecommerce with Product Rating & Review System

Welcome to our Django React Ecommerce project! This README will guide you through the setup and features of our application. 

## Description

Our project is a full-fledged ecommerce platform built using Django and React, offering a seamless shopping experience for both customers and administrators. It includes features such as product rating and review systems, an admin area to manage customers, products, and orders, a fully featured shopping cart with PayPal and credit/debit payments, as well as product search, carousel, pagination, and more.

## Features

- **User Authentication**: Users can sign up, log in, and manage their accounts.
- **Product Catalog**: Browse through a wide range of products.
- **Product Details**: View detailed information about each product, including price, description, and reviews.
- **Product Rating & Review System**: Users can rate and leave reviews for products.
- **Admin Area**: Administrators can manage customers, products, and orders.
- **Shopping Cart**: Add products to cart, update quantities, and proceed to checkout.
- **Payment Integration**: Securely pay using PayPal or credit/debit cards.
- **Search Functionality**: Search for products using keywords.
- **Carousel**: Interactive carousel for showcasing featured products.
- **Pagination**: Navigate through pages of products efficiently.

## Installation

### Prerequisites

- Python
- Node.js
- npm (Node Package Manager)

### Steps

1. **Clone the Repository**: 
    ```bash
    git clone https://github.com/your/repository.git
    ```

2. **Backend Setup**:
    - Navigate to the `backend` directory:
        ```bash
        cd backend
        ```
    - Install Python dependencies:
        ```bash
        pip install -r requirements.txt
        ```
    - Apply migrations:
        ```bash
        python manage.py migrate
        ```
    - Run the Django development server:
        ```bash
        python manage.py runserver
        ```

3. **Frontend Setup**:
    - Navigate to the `frontend` directory:
        ```bash
        cd frontend
        ```
    - Install npm dependencies:
        ```bash
        npm install
        ```
    - Start the React development server:
        ```bash
        npm start
        ```

4. **Set Up Environment Variables**:
    - Create a `.env` file in the `backend` directory and set the following variables:
        ```
        SECRET_KEY=your_secret_key
        DEBUG=True
        DATABASE_URL=your_database_url
        PAYPAL_CLIENT_ID=your_paypal_client_id
        ```

5. **Access the Application**:
    - Visit `http://localhost:3000` in your web browser to access the application.

## Contributing

We welcome contributions from the community! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- This project was inspired by real-world ecommerce platforms.
- Special thanks to the Django and React communities for their valuable resources and documentation.

## Contact

If you have any questions or suggestions, feel free to contact us at [lehieudhqt@gmail.com](mailto:lehieudhqt@gmail.com).

Thank you for using our Django React Ecommerce project! We hope you enjoy using it as much as we enjoyed building it. Happy shopping!
