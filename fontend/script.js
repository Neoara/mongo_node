const BACKEND_URL = "http://localhost:8080";

async function makeRequest (url, method, data) {
    let settings = {url, method, data};
 
    return await $.ajax(settings);
};

async function getCars () { 
    return await makeRequest(`${BACKEND_URL}/cars`, 'get', {});
};

async function getUsers () { 
    return await makeRequest(`${BACKEND_URL}/users`, 'get', {});
};

async function drawUsers () {
    let usersArray = await getUsers();
    let usersBlock = $("#users");
    usersBlock.empty();

    for(let item of usersArray){
        usersBlock.append(
            `
            <div class="users_item" onclick="selectUser('${item._id}')">
                <p>Full name: ${item.fullName}</p>
            </div>
            `
        );
    };
};

function selectUser (userId) {
    localStorage.setItem('selectedUserId', userId);
    console.log(userId)
};

async function drawCars () {
    let carsArray = await getCars();
    let carsBlock = $("#cars");
    carsBlock.empty();

    for(let item of carsArray){
        carsBlock.append(
            `
            <div class="cars_item" onclick="selectCar('${JSON.stringify(item)}')">
                <p>Model: ${item.model}</p>
                <p>Color: ${item.color}</p>
                <p>Year: ${item.year}</p>
            </div>
            `
        )
    };
};

function selectCar (car) {
    let selectedCars = JSON.parse(localStorage.getItem("selectedCars")) || [];
    selectedCars.push(car);
    localStorage.setItem("selectedCars", JSON.stringify(selectedCars));
    console.log(selectedCars);
};

drawUsers();
drawCars();