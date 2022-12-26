import React from 'react';
import './App.css';
import Accordion from "./components/accordion/Accordion";
import {Rating} from "./components/rating/Rating";

function App() {
    console.log("App rendering")
    return (
        <div className="App">
            {/*<PageTitle title={"This is APP component"}/>*/}
            {/*<PageTitle title={"My friends"}/>*/}
            {/*<Rating value={3}/>*/}
            <Accordion title={"Menu"} collapsed={false}/>
            <Accordion title={"Users"} collapsed={true}/>
            {/*<Rating value={5}/>*/}
        </div>
    );
}

type PageTitlePropsType = {
    title : string
}
function PageTitle(props: PageTitlePropsType) {
    console.log("PageTitle rendering")
    return (
        <h1>{props.title}</h1>
    );
}
export default App;
