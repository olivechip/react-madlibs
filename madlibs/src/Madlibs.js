import { useState } from "react";
import MadlibsForm from "./MadlibsForm";
import MadlibsStory from "./MadlibsStory";
import "./Madlibs.css";

const Madlibs = () => {
    const [ data, setData ] = useState({});

    const addData = (newData) => {
        setData(prevData => ({
            ...prevData,
            ...newData
        }));
    };
    
    return (
        <div>
            <h1>Madlibs!</h1>
            <MadlibsForm addData={ addData }/>
            {data.noun && data.noun2 && data.adjective && data.color ? (
                <MadlibsStory 
                    noun={data.noun} 
                    noun2={data.noun2} 
                    adjective={data.adjective} 
                    color={data.color}
                />
            ) : (<p>Please fill out the form to generate the story.</p>)
            }    
        </div>
    )
}

export default Madlibs;