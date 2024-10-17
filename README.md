# Country Project

## Description

The Country Project is a Vue.js application designed to provide users with information about various countries, including their next public holidays. The application utilizes the Composition API and Pinia for state management, fetching data from a public holiday API. It features a user-friendly interface that allows users to explore countries and their holiday information efficiently.

## Features

- Display a list of countries with their next upcoming holidays.
- Randomly select and show information for a subset of countries.
- Responsive design for optimal viewing on various devices.
- Fetch data from a public holiday API.
- State management using Pinia for better performance and organization.

## Technologies Used

- **Vue.js**: The frontend framework for building the application.
- **Vue Router**: For handling navigation and routing.
- **Pinia**: State management library for managing application state.
- **Axios**: For making HTTP requests to the public holiday API.
- **Tailwind CSS**: Utility-first CSS framework for styling the application.
- **TypeScript**: Adds type safety and improves the development experience.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository-url>

   ```

2. Navigate into the project directory:

   cd country-info

3. Install Dependencies:

   npm install

4. Set up environment variables:

   Create a .env file in the root of the project and define your API base URL:
      VITE_API_BASE_URL=<your-api-base-url>

5. Run the development server:
    npm run dev

country-info/
│
├── public/                 # Static assets (images, icons, etc.)
├── src/
│   ├── assets/             # Project-specific assets (fonts, images, etc.)
│   ├── components/         # Vue components (reusable UI elements)
│   ├── router/             # Vue Router configuration for navigation
│   ├── services/           # API service functions for fetching data
│   ├── stores/             # Pinia stores for state management
│   ├── views/              # View components for different application pages
│   ├── App.vue             # Main application component
│   └── main.ts             # Entry point of the application
│
├── .env                    # Environment variables configuration
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation


API Usage
This application fetches upcoming holidays from a public holiday API. Ensure to check the API documentation for specific endpoints and any usage limitations.

Components
HolidayWidget: Displays a selection of countries and their upcoming holidays.
CountriesList: Shows a complete list of countries managed through the state store.
UpcomingHolidayCard: Represents individual holiday information for a country.
Contributing
Contributions are welcome! If you have suggestions for improvements or new features, feel free to open an issue or submit a pull request.

Fork the repository.

Create your feature branch:

bash
Копировать код
git checkout -b feature/YourFeature
Commit your changes:

bash
Копировать код
git commit -m 'Add some feature'
Push to the branch:

bash
Копировать код
git push origin feature/YourFeature
Open a pull request.
