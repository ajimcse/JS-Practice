const user = {
    name: "Ajim",
    age: 25
};

// Object → String → sessionStorage
sessionStorage.setItem("user", JSON.stringify(user));


// sessionStorage → String → Object
const data = sessionStorage.getItem("user");
const userData = JSON.parse(data);

console.log(userData);