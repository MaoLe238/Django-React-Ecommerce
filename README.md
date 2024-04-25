# Django React Ecommerce


This project is a full-fledged ecommerce platform built using Django and React. It includes features such as product rating & review system, an admin area to manage customers, products & orders, a full featured shopping cart with PayPal & credit/debit payments integration, product search, carousel, pagination, and more.

## Features

- **Product Rating & Review System**: Allow users to rate and review products.
- **Admin Area**: Manage customers, products, and orders efficiently.
- **Shopping Cart**: Fully-featured shopping cart with PayPal & credit/debit payments integration.
- **Product Search**: Enable users to search for products easily.
- **Carousel & Pagination**: Enhance user experience with carousel for product display and pagination for large product lists.
- **Responsive Design**: Ensure seamless user experience across devices.

Tech Stack

- **Frontend**: React.js
- **Backend**: Django
- **Database**: PostgreSQL (or any other supported by Django)
- **Payment Integration**: PayPal & Credit/Debit Card Payments
- **Other Tools**: Redux for state management, Django Rest Framework for API development, Bootstrap for styling, etc.

Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/django-react-ecommerce.git

2. Install dependencies for both frontend and backend:
   # Navigate to backend directory
    cd django-react-ecommerce/backend
    # Install backend dependencies
    pip install -r requirements.txt
    
    # Navigate to frontend directory
    cd ../frontend
    # Install frontend dependencies
    npm install

3. Configure environment variables:Create a .env file in the backend directory and add the following variables:
    SECRET_KEY=your_secret_key
    DEBUG=True
    ALLOWED_HOSTS=127.0.0.1,localhost
    
    # PayPal Sandbox Credentials
    PAYPAL_CLIENT_ID=your_paypal_client_id
    PAYPAL_SECRET=your_paypal_secret
    
    # Database
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_HOST=your_database_host
    DB_PORT=your_database_port

4. Run migrations:
   python manage.py migrate

5. Start the backend server:
   python manage.py runserver

6. Start the frontend development server:
   # Navigate to frontend directory
  cd ../frontend
  # Start the development server
  npm start

7. **Access the application at http://localhost:8000.**

## Contributing
Contributions are welcome! Please feel free to submit a pull request.

License
This project is licensed under the [MIT License](LICENSE).



