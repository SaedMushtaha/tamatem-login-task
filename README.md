# Responsive Tamatem Login Page

This Angular project implements a responsive login page with Material Design, featuring a clean and user-friendly interface. The login form is designed with SCSS, and it includes form validation for email and password fields.

## Project Structure

- The `src` folder contains the Angular application source code.
  - `app` folder: Contains the components, services, and other Angular-related files.
    - `login` folder: Contains the login component responsible for the login page.
    - `services` folder: Contains the ImageService used to fetch the logo image.

## Setup

1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the application: `ng serve --open`

## Design Considerations

- The login page follows the design guidelines provided in the SCSS file.
- Responsive design ensures optimal viewing experience across various screen sizes.
- Form validation is implemented for both email and password fields.
- Asynchronous loading of the logo image.

## Code Comments

Comments have been included throughout the code for better understanding. They provide additional context and explanations for various sections of the application.

## Testing

The project includes testing capabilities. Execute tests using the following command:

```bash
ng test
```

## Code Formatting

Prettier is integrated into the project for code formatting. Run the formatter using:

```bash
npm run format
```

## Dependencies

- Angular
- Angular Material
- HttpClient (Angular)
- RxJS
- Prettier (for code formatting)

## License

This project is licensed under the MIT License.
