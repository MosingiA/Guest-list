# Guest-list

# Event Guest List Manager

A simple web app to manage an event guest list using JavaScript, HTML, and CSS.  
This app allows users to add guests with categories, mark RSVP status, edit guest names, and remove guests dynamically — all without page refresh.

---

## Features

- Add guest names with categories: Friend, Family, or Colleague.
- Limit guest list to a maximum of 10 guests, with an alert on exceeding.
- Toggle RSVP status between "Attending" and "Not Attending".
- Remove guests from the list.
- Edit guest names with a simple prompt.
- Display category tags in color-coded style.
- Display the time when each guest was added.

---

## Technologies Used

- HTML5 for structure
- CSS for styling
- JavaScript for DOM manipulation and functionality

---

## File Structure


## Usage

1. Open `index.html` in your preferred web browser.
2. Enter a guest's name in the input field.
3. Select the guest category from the dropdown.
4. Click **Add Guest** to add the guest to the list.
5. Use the **Attending** button to toggle RSVP status.
6. Use **Edit** to change a guest's name.
7. Use **Remove** to delete a guest.
8. If you try to add more than 10 guests, an alert will notify you.

---

## Manual Testing

- Try submitting empty names to check validation.
- Add guests until you hit the 10-guest limit to test the limit alert.
- Toggle RSVP for guests to ensure it switches correctly.
- Edit guest names and confirm changes update in the list.
- Remove guests and confirm they disappear from the UI.

---

## Stretch Ideas for Further Improvement

- Persist guest list data with `localStorage` so it stays after page reload.
- Add filters to view guests by category or RSVP status.
- Include a search box to find guests by name.
- Improve edit feature with inline editing instead of prompt.

---

## Author

Created by [Afya Mosingi]

---

Enjoy managing your event guests.
