const form = document.querySelector(".search-bar");

form.addEventListener("submit", (e) => {
    e.preventDefault(); // prevent default action

    const value = document.getElementById("search").value;

    displaySearchResults(value);
});

const displaySearchResults = (value = "") => {
    const filteredEmoji = emojiList.filter((e) => {
        // 'e' accesses data of emojiList

        if (e.description.indexOf(value) !== -1) {
            return true;
        }

        if (e.aliases.some((elem) => elem.startsWith(value))) {
            return true;
        }

        if (e.tags.some((elem) => elem.startsWith(value))) {
            return true;
        }
    });

    const parent = document.getElementById("search_result");
    parent.innerHTML = "";

    filteredEmoji.forEach((e) => {
        // Dynamic creation
        const new_row = document.createElement("tr");
        const new_emoji = document.createElement("td");
        const new_aliases = document.createElement("td");
        const new_desc = document.createElement("td");

        // Insert data in the dynamically created element
        new_emoji.innerText = e.emoji;
        new_aliases.innerText = e.aliases;
        new_desc.innerText = e.description;

        // Append the new element to the row
        new_row.appendChild(new_emoji);
        new_row.appendChild(new_aliases);
        new_row.appendChild(new_desc);

        parent.appendChild(new_row);
    });
};

window.onload = () => {
    displaySearchResults();
};
