function e(e){return e&&e.__esModule?e.default:e}var i={};i=JSON.parse('[{"id":1,"name":"Алексей Иванов","email":"alexey.ivanov@example.com","age":28,"isActive":true,"roles":["admin","user"]},{"id":2,"name":"Елена Смирнова","email":"elena.smirnova@example.com","age":34,"isActive":false,"roles":["user"]},{"id":3,"name":"Дмитрий Петров","email":"dmitry.petrov@example.com","age":22,"isActive":true,"roles":["moderator","user"]}]');var a=function(e){return e.map(({id:e,name:i,email:a,age:l,isActive:r,roles:m})=>`
    <li id="${e}">
            <p>${i}</p>
            <p>${a}</p>
            <p>${l}</p>
            <p>${r?"online":"offline"}</p>
            <ul>
            ${m.map(e=>`
                <li> 
                ${e}
                </li>`)}
            </ul>
        </li>
`).join("")};let l=document.querySelector(".list");a(e(i)),l.innerHTML=a(e(i));
//# sourceMappingURL=practical.2e284930.js.map
