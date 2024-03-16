# ERP System
My ERP system is a comprehensive solution designed to streamline business operations by integrating various functions such as product and order management. With intuitive dashboards providing insights into key metrics, efficient product and order handling through dedicated components, and seamless communication via the Contact component, our ERP system empowers businesses to make informed decisions and enhance productivity.
### Fully Responsive

#### For Desktop
![Screenshot 2024-03-15 180514](https://github.com/Sejalkathane/ERP_system/assets/93898954/7934c8f8-07cc-483b-8187-271406ff4c3f) 
#### For Mobile
![Screenshot 2024-03-15 195255](https://github.com/Sejalkathane/ERP_system/assets/93898954/1186c4f6-8938-457a-b37d-f952fcc90888)




## Table of Contents
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [App.js ](#appjs-component)
- [Dashboard Component (Dashboard.js)](#dashboard-component)
- [Product Management Component (Product.js)](#product-management-component-productjs)
- [Order Management Component (Order.js)](#order-management-component-orderjs)
- [Order Calendar Component (OrderCalendar.js)](#order-calendar-component-ordercalendarjs)
- [Contact Component](#contact-component)

## Usage
To utilize the components included in this project:
1. Integrate the Dashboard component into the main interface of your application to provide users with an overview of product and order management statistics and visualizations.
2. Incorporate the Product Management component (Product.js) to handle various operations related to managing products within your application, such as adding, editing, and deleting products.
3. Utilize the Order Management component (Order.js) to manage orders within your application, including functionalities for adding, editing, and deleting orders.
4. Integrate the Order Calendar component (OrderCalendar.js) to provide users with a user-friendly interface for viewing orders based on selected dates.
5. Incorporate the Contact component to allow users to send messages and communicate with the administrators of your application.

Ensure that the necessary dependencies are installed and that the components are properly integrated into your application's structure and functionality.

## Technologies Used
The project utilizes the following technologies:
- React
- Redux
- EmailJS
- HTML5
- CSS
- Google Maps API

These technologies work together to create a robust and user-friendly application for managing products, orders, and communication with users.

## App.js Component
The `App.js` component serves as the entry point of the React application. It orchestrates the routing and rendering of different components based on the URL path using the React Router library. This component integrates Redux for state management and provides a Redux store to the entire application using the `Provider` component from `react-redux`.

### Routing Setup
The `createBrowserRouter` function from `react-router-dom` is used to define the application routes and their corresponding components. Each route object specifies a path and the React element to render when that path matches the current URL.

### Components Rendered
- **Dashboard:** Rendered at the root path ("/"), providing users with an overview of product and order management statistics and visualizations.
- **Products:** Rendered at the "/products" path, allowing users to manage product-related operations such as adding, editing, and deleting products.
- **Order:** Rendered at the "/order" path, facilitating order management functionalities including adding, editing, and deleting orders.
- **Order Calendar:** Rendered at the "/cal" path, providing users with a calendar interface for viewing orders based on selected dates.
- **Contact:** Rendered at the "/contact" path, allowing users to send messages and communicate with the administrators of the application.

## Dashboard Component

### Overview
The Dashboard component serves as the main interface of the application, providing users with an overview of product and order management statistics and visualizations. It offers insights into key metrics and trends to help users make informed decisions.

### Key Features
- **Navbar:** Allows easy navigation to other sections of the application, providing a consistent user experience.
- **Main Interface:** Displays various visualizations and statistics related to product and order management, such as distribution of products by category, orders by status, etc.

![Screenshot 2024-03-15 181113](https://github.com/Sejalkathane/ERP_system/assets/93898954/9213eb9e-c166-40a4-9fe4-f6c9adee0774)


### Data Analysis and Flow Chart:
#### Data is Real time Updated data if you make any changes in Product and Orders this chart also update.
1. **Distribution of Products by Category:** Illustrates the distribution of products across different categories.
2. **Distribution of Orders by Status:** Displays the distribution of orders based on their status.
3. **Distribution of No. of Orders by Month:** Graphically represents the number of orders placed each month over time.
4. **Distribution of Revenue by Category:** Visualizes the revenue generated from each product category.

### Footer
The footer section typically contains contact information, social media links, and additional relevant links.

## Product Management Component (Product.js)

### Overview
The Product Management component handles various operations related to managing products within the application. It allows users to add, edit, and delete products, as well as view a list of existing products.

### Imports
- **Actions:** Import action creators such as addProduct, editProduct, and deleteProduct from the "../Actionfol/ProAction" file.
- **ProdCard:** Used to display product information in a visually appealing card format.

### Initial Product State
The initial state of the component may include mock data for products.Path: "Products/InitialProducts.js".

### Functions
- **handleAddProduct:** Handles the addition of a new product to the list.
- **handleEditProduct:** Allows editing of an existing product.
- **handleUpdateProduct:** Updates the product data.
- **handleDeleteProduct:** Deletes a product from the list.

### Form Inputs
Input fields for entering the product's name, category, price, and stock quantity.

### Product List
Displays a list of products using the ProdCard component.

## Order Management Component (Order.js)

### Overview
The Order Management component handles various operations related to managing orders within the application. It allows users to add, edit, and delete orders, as well as view a list of existing orders.

### Imports
- **Actions:** Import action creators such as addOrder, editOrder, and deleteOrder from the "../Actionfol/OrderAction" file.
- **OrderList:** Used to display a list of orders in a structured format.

### Functions
- **handleSaveOrder:** Handles the submission of the order form.
- **handleEditOrder:** Allows editing of an existing order.
- **handleDeleteOrder:** Deletes an order from the list.
- **handleViewOrderDetails:** Displays the details of a specific order.

### Form Inputs
Input fields for entering the customer's name, order date, and status.Path: "Order/OrderInitialstate.js".

### Order List
Displays a list of orders using the OrderList component.

## Order Calendar Component (OrderCalendar.js)

### Overview
The Order Calendar component provides a user-friendly interface for viewing orders based on selected dates. It allows users to interact with a calendar UI to select dates and view orders associated with those dates.

### Imports
- **Calendar:** Imported from "react-calendar" to render the calendar interface.
- **useSelector:** Used to access Redux store state.
- **Navbar and Footer:** Layout components for the calendar page.

### Functions
- **handleDateClick:** Triggered when a date on the calendar is clicked to display orders for that date.
- **handleCloseModal:** Closes the modal displaying orders.

### Calendar Interaction
The calendar UI is customized with event handlers for date selection.

### Modal Display
The modal displays detailed information about orders for the selected date.

## Contact Component

### Overview
The Contact component provides users with a form to send messages to the application's administrators. Additionally, it includes functionality to display a map and address for easier communication and location identification.

### Features
- **Contact Form:** Allows users to submit messages to the application administrators.
- **Google Map:** Displays the location of the business to help users identify the physical address easily.

### Address
- **Location:** Ganpati Nagar, Dastur Nagar, Amravati, Maharashtra.

### Usage

To use the Contact component:

1. Fill in the "Name" and "Note" fields with your name and message, respectively.
2. Click the "Send" button to submit your message.
3. Upon successful submission, a confirmation message will be displayed indicating that the message has been sent.
4. Use the provided map to locate the business address easily.


## Author:
### Sejal Kathane