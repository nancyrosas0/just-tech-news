// const { beforeCreate } = require("./User");

// hooks: {
//     // set up beforeCreate lifecycle "hook" functionality
//     beforeCreate(userData) {
//         return bcrypt.hash(userData.password, 10).then(newUserData => {
//             return newUserData
//         });
//     }
// },

// hooks: {
//     beforeCreate(userData) {
//         return bcrypt.hash(userData.password, 10).then (newUserData => {
//             return newUserData;
//         })
//     }
// }

// hooks: {
//     beforeCreate(userData) {
//         return bcrypt.hash(userData.password, 10).then(newUserData => {
//             return newUserData; 
//                })
//     }
// }

// beforeCreate(userData) {
//     return bcrypt.hash(userData.password, 10)
// }