import { useLocation } from "react-router-dom";

const Details = () => {
    console.log("This works");
    const location = useLocation();
    var name = location.state.name;
    var problem = location.state.problem;
    var analysis = location.state.analysis;
    var solution = location.state.solution;
    
    return(
        <div id="box">
            <div id="nice">
                <h3 id="hoh">Job Name :</h3>
                <p id="p1">{name}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Problem :</h3>
                <p id="p1">{problem}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Analysis :</h3>
                <p id="p1">{analysis}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Solution :</h3>
                <p id="p1">{solution}</p>
            </div>
        </div>
    )
};

export default Details;