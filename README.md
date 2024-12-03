# Reticen8 Website

Provide innovative cybersecurity solutions.

# Running this project Locally

From the repo:

1. Clone this project Locally
2. Run `npm install` in your bash/command line
3. Run `npm run dev` in your bash/command line

# Dependencies in project

Dependencies
bootstrap-icons (^1.11.3) - Provides a collection of free, open-source icons.
eslint (^8.56.0) - Enforces coding standards and best practices in JavaScript/TypeScript.
eslint-config-next (^14.1.0) - ESLint configuration for Next.js projects.
framer-motion (^11.11.17) - A library for animations and motion effects in React.
gsap (^3.12.5) - GreenSock Animation Platform, used for animations.
next (^14.2.18) - The React framework for server-side rendering and static websites.
next-themes (^0.2.1) - Manages themes (dark mode, light mode) in Next.js projects.
nodemailer (^6.9.16) - Simplifies email sending in Node.js applications.
react (^18.3.1) - The core library for building user interfaces.
react-dom (^18.3.1) - Handles rendering components in the DOM.
react-modal-video (^2.0.1) - Adds modal video functionality in React apps.

Dev Dependencies
@types/node (^20.8.9) - TypeScript types for Node.js.
@types/react (^18.2.33) - TypeScript types for React.
autoprefixer (^10.4.17) - Adds vendor prefixes to CSS rules for cross-browser compatibility.
postcss (^8.4.35) - A tool to transform CSS with JavaScript plugins.
prettier (^3.2.5) - A code formatter to enforce consistent coding styles.
prettier-plugin-tailwindcss (^0.5.11) - Organizes Tailwind CSS classes in a consistent order.
tailwindcss (^3.4.1) - A utility-first CSS framework for styling.
typescript (^5.3.3) - Adds static typing to JavaScript.

# How to Host/Deploy

Follow these steps to host your project on cPanel:

1. Compress Your Build Files

Run the build command for your project:
bash
Copy code
npm run build
Compress the build or dist folder into a .zip file.

2. Access cPanel

Log in to your cPanel account provided by your hosting service.

3. Open the File Manager

Navigate to the File Manager in cPanel.
Go to the public_html directory (or the appropriate domain folder).

4. Upload the ZIP File

Click Upload and select your .zip file containing the build files.

5. Extract the ZIP File

After uploading, right-click the .zip file and choose Extract.

6. Ensure the Files Are in public_html

Ensure that all extracted files (e.g., index.html, static/) are directly inside the public_html folder.

7. Configure Domain (If Necessary)

If using a custom domain, ensure it points to your cPanel account via DNS settings.

8. Test Your Website

Visit your domain (e.g., http://yourdomain.com) to check if the site is live.






### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
