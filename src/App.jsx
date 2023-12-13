import './App.css'
import React from "react";
import {Route, Routes} from "react-router-dom";
import TaskListPage from "./pages/TaskListPage/index.jsx";


function App() {
    return (
        <Routes>
            <Route path="/" element={<TaskListPage/>}/>
            <Route path="/task" element={<TaskListPage/>}/>
        </Routes>
    )
}

export default App
