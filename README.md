# Generate Splash Screens

This package generates splash screens and icons for different configured form factors (Android, iOS, Desktop etc.).
To have the splash screens in different resolutions, its recommended to use SVG.


## Usage

1. Clone the repo `git clone https://github.com/gauravdhiman/generate-splash-screens.git`

2. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

3. Install your dependencies

    ```
    cd path/to/generate-splash-screens; npm install
    ```

4. Configure the dimension for which you need splash screens, by editing `const sizes` in `index.js`

5. Generate splash screens by running `node index.js` on command prompt.

6. Check the generated splash screens in `./icon` folder.

---

*Credit: This repo is a result of info shared on https://dev.to/dominikfiala/hassle-free-pwa-icons-and-splash-screen-generation-3c24*