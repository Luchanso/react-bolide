module.exports = {
    "env": {
      "es6": true,
      "node": true,
      "jest": true,
      "browser": true,
    },
    globals: {
      "assembly": true
    },
    "extends": "airbnb",
    "plugins": [
      "react",
      "jsx-a11y",
      "import"
    ],
    "settings": {
      "import/resolver": "webpack"
    }
};
