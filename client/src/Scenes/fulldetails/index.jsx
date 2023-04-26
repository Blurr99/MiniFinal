import { useLocation } from "react-router-dom";


const Fulldetails = () => {
    // console.log("This works!");
    const location = useLocation();
    var id = location.state.id
    var state = location.state.state
    var opened_at = location.state.opened_at
    var description = location.state.description
    var assigned_to = location.state.assigned_to
    var assignment_group = location.state.assignment_group
    var resolved_by = location.state.resolved_by
    var failure_type = location.state.failure_type
    var impact = location.state.impact
    var priority = location.state.priority
    var close_notes = location.state.close_notes
    var incident_state = location.state.incident_state
    var severity = location.state.severity
    var sys_created_on = location.state.sys_created_on
    var manageralertid = location.state.u_manageralertid
    var reason = location.state.u_reason_for_reassignment
    var urgency = location.state.urgency

    return(
        <div id="box">
            <div id="nice">
                <h3 id="hoh">Job ID :</h3>
                <p id="p1">{id}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Status :</h3>
                <p id="p1">{state}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Opened At :</h3>
                <p id="p1">{opened_at}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Description :</h3>
                <p id="p1">{description}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Assigned To :</h3>
                <p id="p1">{assigned_to}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Assigned Group :</h3>
                <p id="p1">{assignment_group}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Resolved :</h3>
                <p id="p1">{resolved_by}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Failure Type :</h3>
                <p id="p1">{failure_type}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Impact :</h3>
                <p id="p1">{impact}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Priority :</h3>
                <p id="p1">{priority}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Close Notes :</h3>
                <p id="p1">{close_notes}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Incident State :</h3>
                <p id="p1">{incident_state}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Severity :</h3>
                <p id="p1">{severity}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Sys Created on :</h3>
                <p id="p1">{sys_created_on}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">ManagerAlertID :</h3>
                <p id="p1">{manageralertid}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Reason for Reassignment :</h3>
                <p id="p1">{reason}</p>
            </div>
            <div id="nice">
                <h3 id="hoh">Urgency :</h3>
                <p id="p1">{urgency}</p>
            </div>

        </div>
    )
};

export default Fulldetails;