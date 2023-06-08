import React from "react";
import "./index.scss";
import Homepage from "./Pages/Homepage";
import { ThemeProvider } from "@material-tailwind/react";
import ComplexNavbar from "./Components/ComplexNav";
import { observer } from "mobx-react-lite";
import colorStore from "./Store/ThemeColorStore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./Pages/Projects";

const App = observer(() => {
  const customTheme = {};
  return (
    <ThemeProvider value={customTheme}>
      <BrowserRouter>
        <html>
          <head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
              href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
              rel="stylesheet"
            />
          </head>
          <div className={`px-6 md:px-12 ${colorStore.themeColorClass}`}>
            <div className="pt-0 md:pt-0 lg:pt-6 mx-auto">
              <ComplexNavbar />
            </div>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" Component={Homepage} />
              <Route path="/projects" Component={Project} />
            </Routes>
          </div>
        </html>
      </BrowserRouter>
    </ThemeProvider>
  );
});

export default App;
