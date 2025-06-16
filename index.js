document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("guest-form");
  const guestInput = document.getElementById("guest-name");
  const categorySelect = document.getElementById("guest-category");
  const guestList = document.getElementById("guest-list");
  const maxGuests = 10;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = guestInput.value.trim();
    const category = categorySelect.value;
    if (!name) {
      alert("Guest Name Required!.");
      return;
    }

    if (guestList.children.length >= maxGuests) {
      alert("Guest limit reached! Max 10 guests.");
      return;
    }

    const li = document.createElement("li");

    const nameSpan = document.createElement("span");
    nameSpan.textContent = `${name} `;
    nameSpan.classList.add(`category-${category}`);

    const categoryTag = document.createElement("strong");
    categoryTag.textContent = `(${category})`;

    const time = document.createElement("small");
    const addedTime = new Date().toLocaleString();
    time.textContent = ` | Added: ${addedTime}`;

    const rsvpBtn = document.createElement("button");
    rsvpBtn.textContent = "Attending";
    rsvpBtn.addEventListener("click", () => {
      rsvpBtn.textContent = rsvpBtn.textContent === "Attending" ? "Not Attending" : "Attending";
    });

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", () => {
      const newName = prompt("Edit guest name:", nameSpan.textContent.trim());
      if (newName) {
        nameSpan.textContent = newName + " ";
        nameSpan.appendChild(categoryTag);
      }
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      li.remove();
    });

    li.appendChild(nameSpan);
    nameSpan.appendChild(categoryTag);
    li.appendChild(time);
    li.appendChild(rsvpBtn);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);

    guestList.appendChild(li);

    guestInput.value = "";
    categorySelect.selectedIndex = 0;
  });
});
