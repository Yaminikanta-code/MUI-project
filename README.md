# Simple Responsive UI with Dark and Light Mode using Material-UI

This project demonstrates a responsive UI layout with a **Navbar**, **Sidebar**, **Feed**, and **Rightbar**. It also includes a **Dark and Light Mode** toggle functionality using Material-UI's `ThemeProvider`.

---

## Features

- **Navbar**: Displays the app title and icons for notifications and messages.
- **Sidebar**: Contains navigation links.
- **Feed**: Displays the main content area.
- **Rightbar**: Contains additional information or widgets.
- **Mobile Responsiveness**: Adjusts the layout for smaller screens by hiding or collapsing components.
- **Dark and Light Mode**: Users can switch themes using a toggle button in the Sidebar.

---

## Technologies Used

- **React.js**: For building the user interface.
- **Material-UI (MUI)**: For styling and components.
- **Responsive Design**: Utilizes Material-UI's `Box`, `Stack`, and `breakpoints`.
- **Dark and Light Mode**: Leveraging Material-UI's `createTheme` and `ThemeProvider`.

---

## Layout

### Desktop View

- Displays all four sections: Navbar, Sidebar, Feed, and Rightbar.

### Tablet View

- Rightbar are hidden or collapsed.
- Navbar and Feed adjust to fit tablet screens.

### Mobile View

- Sidebar and Rightbar are hidden or collapsed.
- Navbar and Feed adjust to fit smaller screens.
