/**
 * This is a minimal config.
 *
 * If you need the full config, get it from here:
 * https://unpkg.com/browse/tailwindcss@latest/stubs/defaultConfig.stub.js
 */

module.exports = {

  daisyui: {
    themes: [
        {
       mytheme: {
                 "primary": "#140151",
                 "secondary": "#706d6f",
                 "accent": "#0094b2",
                 "neutral": "#24224f",
                 "base-100": "#fafdf6",
                 "info": "#008fff",
                 "success": "#00a982",
                 "warning": "#ffbe00",
                 "error": "#ff5175",
        },
        },
        "light", "dark", "cupcake","acid"],
  },
    content: [
        /**
         * HTML. Paths to Django template files that will contain Tailwind CSS classes.
         */

        /*  pages within theme app (<tailwind_app_name>/pages), e.g. base.html. */
        '../pages/**/*.html',

        /*
         * Main pages directory of the project (BASE_DIR/pages).
         * Adjust the following line to match your project structure.
         */
        '../../pages/**/*.html',

        /*
         * pages in other django apps (BASE_DIR/<any_app_name>/pages).
         * Adjust the following line to match your project structure.
         */
        '../../**/pages/**/*.html',

        /**
         * JS: If you use Tailwind CSS in JavaScript, uncomment the following lines and make sure
         * patterns match your project structure.
         */
        /* JS 1: Ignore any JavaScript in node_modules folder. */
        // '!../../**/node_modules',
        /* JS 2: Process all JavaScript files in the project. */
        // '../../**/*.js',

        /**
         * Python: If you use Tailwind CSS classes in Python, uncomment the following line
         * and make sure the pattern below matches your project structure.
         */
        // '../../**/*.py'
    ],
    theme: {
        extend: {},
    },
    plugins: [
        /**
         * '@tailwindcss/forms' is the forms plugin that provides a minimal styling
         * for forms. If you don't like it or have own styling for forms,
         * comment the line below to disable '@tailwindcss/forms'.
         */
        require("daisyui"),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/aspect-ratio'),
    ],
}
