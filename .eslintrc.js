module.exports = {
    "parser": "babel-eslint",
    "extends": [
        "airbnb",
        "prettier"
    ],
    "env": {
        "es6": true,
        "jest": true,
    },
    "plugins": [
        "react",
        "react-native",
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "no-use-before-define": ["error", { "functions": false, "classes": true }],
        "react/prop-types": ["off"] ,
        "react/jsx-one-expression-per-line": ["off"]
    }
};
