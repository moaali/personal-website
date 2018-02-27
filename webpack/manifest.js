import path from 'path';
import yargs from 'yargs';
import fs from 'fs';

// --------------------
// @Environment Holders
// --------------------

const { env } = yargs.argv;
const IS_DEVELOPMENT = env === 'development';
const IS_PRODUCTION = env === 'production';

// ------
// @Utils
// ------

const dir = src => path.join(__dirname, src);

const getDirectories = PATH => (
  fs
    .readdirSync(PATH)
    .filter(
      name => (
        fs
          .statSync(`${PATH}/${name}`)
          .isDirectory()
      )
    )
)

// ---------
// @App Type
// ---------

/**
 * Defines the output of HTML into the build.
 *
 * 'SPA':   Used for Single Page Application.
 * 'MULTI': Used for multiple HTML pages.
 */
const APP_TYPE = 'SPA';

// ----------
// @App Paths
// ----------

const paths = {
  src: dir('../src'),
  build: dir('../build'),
};

// -------------------
// @Output Files Names
// -------------------

const outputFiles = {
  bundle: 'bundle.js',
  vendor: 'vendor.js',
  css: 'style.css',
};

// --------------------
// @Entries Files Names
// --------------------

const entries = {
  js: 'index.jsx',
};

// -----------------
// @Exporting Module
// -----------------

export {
  paths,
  outputFiles,
  entries,
  env,
  IS_DEVELOPMENT,
  IS_PRODUCTION,
  getDirectories,
  APP_TYPE,
};
