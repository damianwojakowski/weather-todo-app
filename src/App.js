import React from 'react';
import logo from './logo.svg';
import ServiceAvailbility from './features/service-availability/ServiceAvailability.js';
import TodoList from './features/todo-list/TodoList.js';
import Weather from './features/weather/Weather.js';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={ logo }
                     className="App-logo"
                     alt="logo"/>
                <ServiceAvailbility />
            </header>
            <main className="App-content">
                <article className="App-content-base">
                    <TodoList />
                </article>
                <aside className="App-content-aside">
                    <Weather />
                </aside>
            </main>
        </div>
    );
}

export default App;
