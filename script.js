let submitBtn = document.getElementById("Submit");

const info = {
    s_name: '',
    email: '',
    phone: '',
    gender: '',
    sArr: [],
}

const getData = () => {
    info.s_name = document.getElementById('name').value;
    info.email = document.getElementById('email').value;
    info.phone = document.getElementById('phone').value;
    info.gender = document.querySelector('input[name="mf"]:checked').value;
    let skills = document.querySelectorAll('.checkbox:checked');

    info.sArr = [];
    skills.forEach((item) => {
        info.sArr.push(item.value);
    })

    if (localStorage.getItem("infoSection") === null) {
        infoItem = [];
    } else {
        infoItem = JSON.parse(localStorage.getItem("infoSection"))
    }
    infoItem.push(info);
    localStorage.setItem("infoSection", JSON.stringify(infoItem));
}

const showData = () => {
    let cardContainer = document.getElementById("basket");

    let cards = '';

    let getLocalStorage = localStorage.getItem("infoSection");

    if (getLocalStorage === null) {
        console.log("null");
    } else {
        cardDivArr = JSON.parse(getLocalStorage);

        cardDivArr.forEach((item, index) => {

            cards += `<div class="card">
            <div class="info">
                <p><strong>Name</strong> : ${item.s_name}</p>
                <p><strong>Email</strong> : ${item.email}</p>
                <p><strong>phone</strong> : ${item.phone}</p>
                <p><strong>Gender</strong> : ${item.gender}</p>
                <p><strong>Skills</strong> : ${item.sArr.join(", ")}</p>
                <button onclick="deleteData(${index})">Delete</button>
            </div>
        </div>`;
        })
    }
    basket.innerHTML = cards;
}

const deleteData = (index) => {
    let getList = JSON.parse(localStorage.getItem("infoSection"));
    getList.splice(index, 1);

    localStorage.setItem("infoSection", JSON.stringify(getList));
    window.location.reload();
}

showData();

submitBtn.addEventListener(('click'), () => {
    getData();
    showData();
})