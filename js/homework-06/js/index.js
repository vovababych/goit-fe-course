"use strict";
import users from "./users.js";

//--------task-01-----------
console.log("task-01");
const getUserNames = (users) => {
  return users.map(function (user) {
    return user.name;
  });
};
console.log(getUserNames(users)); // [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//--------task-02-----------
console.log("task-02");
const getUsersWithEyeColor = (users, color) => {
  return users.filter(function (user) {
    return user.eyeColor === color;
  });
};
console.log(getUsersWithEyeColor(users, "blue")); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//--------task-03-----------
console.log("task-03");
const getUsersWithGender = (users, gender) => {
  return users.filter(function (user) {
    return user.gender === gender;
  });
};

console.log(getUsersWithGender(users, "male")); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//--------task-04-----------
console.log("task-04");
const getInactiveUsers = (users) => {
  return users.filter(function (user) {
    return !user.isActive;
  });
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//--------task-05-----------
console.log("task-05");
const getUserWithEmail = (users, email) => {
  return users.find(function (user) {
    return user.email === email;
  });
};

console.log(getUserWithEmail(users, "shereeanthony@kog.com")); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, "elmahead@omatom.com")); // {объект пользователя Elma Head}

//--------task-06-----------
console.log("task-06");
const getUsersWithAge = (users, min, max) => {
  return users.filter(function (user) {
    return user.age >= min && user.age <= max;
  });
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

//--------task-07-----------
console.log("task-07");
const calculateTotalBalance = (users) => {
  return users.reduce(function (acc, user) {
    return acc + user.balance;
  }, 0);
};

console.log(calculateTotalBalance(users)); // 20916

//--------task-08-----------
console.log("task-08");
const getUsersWithFriend = (users, friendName) => {
  // твой код
  return users.filter(function (user) {
    return user.friends.includes(friendName);
  });
};

console.log(getUsersWithFriend(users, "Briana Decker")); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, "Goldie Gentry")); // [ 'Elma Head', 'Sheree Anthony' ]

//--------task-09-----------
console.log("task-09");
const getNamesSortedByFriendsCount = (users) => {
  // твой код
  return users.sort(function (prev, next) {
    return prev.friends.length - next.friends.length;
  });
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//--------task-10-----------
console.log("task-10");
const getSortedUniqueSkills = (users) => {
  const allSkills = users.reduce(function (skills, user) {
    skills.push(...user.skills);
    return skills;
  }, []);

  const filtered = allSkills.reduce(function (acc, skill) {
    if (!acc.includes(skill)) {
      acc.push(skill);
      return acc;
    }
    return acc;
  }, []);

  const sorted = filtered.sort();
  return sorted;
};

console.log(getSortedUniqueSkills(users));
// console.log(users);
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
