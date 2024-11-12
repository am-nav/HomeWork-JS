const person = {
    _id: "5d8f881c59acc00a4ad2c76c",
    index: 0,
    guid: "fee2831b-b978-4bbd-8a3d-09fb6bd368b4",
    isActive: true,
    balance: "$3,304.39",
    picture: "http://placehold.it/32x32",
    age: 39,
    eyeColor: "green",
    name: {
        first: "May",
        last: "Lang",
    },
    company: "KONGENE",
    email: "may.lang@kongene.com",
    phone: "+1 (891) 552-3812",
    address: "159 Minna Street, Bodega, Virginia 4881",
    registered: "Saturday, March 29, 2014 9:41 PM",
    latitude: "67.175985",
    longitude: "-134.135539",
    tags: ["esse", "minim", "anim", "adipisicing", "nostrud"],
    friends: [
        { id: 0, name: "Lenora Berger" },
        { id: 1, name: "Heath Hess" },
        { id: 2, name: "Fulton Thomas" },
        { id: 3, name: "Cathryn Weiss" },
        { id: 4, name: "King Barker" },
    ],
};

const summary = {
    fullName: undefined,
    balance: undefined,
    friendsMap: undefined,
    filteredTags: undefined,
    formattedAddress: undefined,
    coordinates: undefined,
};

const getFullName = function () {
    return (`${this.name.first} ${this.name.last}`)
};
const getBalance = function () {
    return this.balance
};
const getFrendsMap = function () {
    return `error`
};
const getFilteredTags = function () {
    return this.tags.filter(tag => tag.includes("anim"))
};
const getFormattedAddress = function () {
    const addressParts = this.address.split(", ")
    return `${addressParts[1]}, ${addressParts[2]}`
}; 
const getCoordinates = function () {
    return {
        latitude: this.latitude,
        longitude: this.longitude
    }
};

summary.fullName = getFullName.call(person);
summary.balance = getBalance.call(person);
const boundFriendsMap = getFrendsMap.bind(person);
summary.friendsMap = boundFriendsMap();
const boundFiltertags = getFilteredTags.bind(person);
summary.filteredTags = boundFiltertags()
summary.formattedAddress = getFormattedAddress.apply(person);
summary.coordinates = getCoordinates.call(person);


console.log(summary);



//! ============  second way ============
// const summary = {
//     fullName: function (){
//         return `${this.name.first} ${this.name.last}`
//     },
//     balance: function () {
//         return this.balance
//     },
//     friendsMap: undefined,
//     filteredTags: function () {
//         return this.tags.filter(tag => tag.includes("anim"))
//     },
//     formattedAddress: function () {
//         const addressParts = this.address.split(", ")
//         return `${addressParts[1]}, ${addressParts[2]}`
//     },
//     coordinates: function () {
//         return {
//             latitude: this.latitude,
//             longitude: this.longitude
//         }
//     },
// };


// summary.fullName = summary.fullName.call(person);
// summary.balance = summary.balance.call(person);
// // summary.friendsMap = summary.friendsMap.call(person);
// summary.filteredTags = summary.filteredTags.call(person);
// summary.formattedAddress = summary.formattedAddress.call(person);
// summary.coordinates = summary.coordinates.call(person)

// console.log(summary);