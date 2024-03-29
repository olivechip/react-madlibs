import { useState } from "react";

const MadlibsForm = ({ addData }) => {
    const [ data, setData ] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData, 
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addData(data);
        setData({});
        document.getElementById("madlibs-form").reset();
    };

    return (
        <div>
            <form id="madlibs-form" onSubmit={handleSubmit}>
                <input name="noun" placeholder="noun" value={data.noun} onChange={handleChange}></input>
                <input name="noun2" placeholder="noun2" value={data.noun2} onChange={handleChange}></input>
                <input name="adjective" placeholder="adjective" value={data.adjective} onChange={handleChange}></input>
                <input name="color" placeholder="color" value={data.color} onChange={handleChange}></input>
                <div><button>Get Story</button></div>
            </form>
        </div>
    )
}

export default MadlibsForm;