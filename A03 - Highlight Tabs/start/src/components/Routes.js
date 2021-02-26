import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Feature from "../pages/Feature"
export default function ViewPort({ children }) {

    return (
        <div className="viewport">
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/features">
                    <Feature />
                </Route>
                <Route exact={true} path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    )

}