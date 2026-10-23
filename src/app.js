import users from "../data.json"
import render from "./markApp/render"

const getList = document.querySelector(".list")

render(users)

// getList.insertAdjacentHTML("beforeend", render(users))


getList.innerHTML = render(users)


