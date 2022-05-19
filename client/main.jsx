import React, { Suspense } from 'react';
import ReactDOM from "react-dom/client";
import { Meteor } from 'meteor/meteor';
import { App } from '/app/ui/App';

Meteor.startup(() => {
  const root = ReactDOM.createRoot(document.getElementById("react-target"));
root.render(
    <Suspense fallback={<h1>Loading simon website...</h1>}>
    <App/>
    </Suspense>, 
)});
