function render(ar) {
  const data = ar
    .map(({ id, name, email, age, isActive, roles }) => {
      return `
    <li id="${id}">
            <p>${name}</p>
            <p>${email}</p>
            <p>${age}</p>
            <p>${isActive? "online":"offline"}</p>
            <ul>
            ${roles.map((item) => {
              return `
                <li> 
                ${item}
                </li>`;
            })}
            </ul>
        </li>
`;
    })
    .join("");
  return data;
}

export default render;
