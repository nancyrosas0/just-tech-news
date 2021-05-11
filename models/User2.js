// const { beforeCreate } = require("./User");

const { beforeCreate } = require("./User");

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

hooks: {
    // set up beforeCreate lifecycle "hook" functionality
    async beforeCreate(userData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
    }
},

// hooks: {
//     async beforeCreate(userData) {
//         newUserData.password = await bcrypt.hash(newUserData.password, 10);
//         return newUserData;
//     }
// },

// async beforeCreate(userData) {
//     newUserData.password = await bcrypt.hash(newUserData.password, 10);
//     return newUserData;
// }