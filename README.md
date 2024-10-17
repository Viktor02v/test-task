country-holidays-explorer
This template helps you get started developing with Vue 3 and Vite, using APIs to explore country holidays information.

Recommended IDE Setup
VSCode + Volar (and disable Vetur).

Type Support for .vue Imports in TS
TypeScript cannot handle type information for .vue imports by default, so we replace the tsc CLI with vue-tsc for type checking. In editors, we need Volar to make the TypeScript language service aware of .vue types.

Customize configuration
See Vite Configuration Reference.

Environment Variables
Create a .env file in the root directory for storing environment variables such as API URLs:

sh
Копировать код
VITE_API_BASE_URL=https://date.nager.at/api/v3
Make sure not to commit this file to version control by ensuring .env is listed in .gitignore.

Project Setup
sh
Копировать код
npm install
Compile and Hot-Reload for Development
sh
Копировать код
npm run dev
Type-Check, Compile and Minify for Production
sh
Копировать код
npm run build
Lint with ESLint
sh
Копировать код
npm run lint
APIs Used
Available Countries: https://date.nager.at/api/v3/AvailableCountries
Next Public Holidays by Country: https://date.nager.at/api/v3/NextPublicHolidays/{countryCode}
Public Holidays by Year and Country: https://date.nager.at/api/v3/PublicHolidays/{year}/{countryCode}

