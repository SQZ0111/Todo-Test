const submitForm = document.querySelector(".new-todo");
console.log(submitForm);

submitForm.addEventListener("submit",(e) => {
    e.preventDefault();
    // console.log(submitForm);
    const listText = submitForm[0].value;
    console.log(listText);

    const listItem = document.createElement("li");
    listItem.innerText = listText;
    listItem.classList.add("list-item");
    const list = document.querySelector(".list");
    list.appendChild(listItem);
})
