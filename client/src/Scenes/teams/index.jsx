import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "JobID" },
    {
      field: "state",
      headerName: "Status",
    },
    {
      field: "opened_at",
      headerName: "Opened At",
      type: "number",
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
    },
    {
      field: "assigned_to",
      headerName: "Assigned to",
      flex: 1,
    },
    {
      field: "assignment_group",
      headerName: "Assigned Group",
      flex: 1,
    },
    {
      field: "resolved_by",
      headerName: "Resolved By",
      flex: 1,
    },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://server-tzfy.onrender.com/getHome", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data.data);
      });
  }, []);

  const navigate = useNavigate();
  const handleRowClick = (params) => {
    console.log(params);
    var id = params.row.id;
    var state = params.row.state;
    var opened_at = params.row.opened_at;
    var description = params.row.description;
    var assigned_to = params.row.assigned_to;
    var assignment_group = params.row.assignment_group;
    var resolved_by = params.row.resolved_by;
    var failure_type = params.row.failure_type;
    var impact = params.row.impact;
    var priority = params.row.priority;
    var close_notes = params.row.close_notes;
    var incident_state = params.row.incident_state;
    var severity = params.row.severity;
    var sys_created_on = params.row.sys_created_on;
    var u_elementmanageralertid = params.row.u_elementmanageralertid;
    var u_reason_for_reassignment = params.row.u_reason_for_reassignment;
    var urgency = params.row.urgency;

    navigate("/fulldetails", {
      state: {
        id: id,
        state: state,
        opened_at: opened_at,
        description: description,
        assigned_to: assigned_to,
        assignment_group: assignment_group,
        resolved_by: resolved_by,
        failure_type: failure_type,
        impact: impact,
        priority: priority,
        close_notes: close_notes,
        incident_state: incident_state,
        severity: severity,
        sys_created_on: sys_created_on,
        manageralertid: u_elementmanageralertid,
        reason: u_reason_for_reassignment,
        urgency: urgency,
      },
    });
  };

  return (
    <Box m="20px">
      <Box
        m="40px 0 0 0"
        height="75vh"
        width="75vw"
        position={"absolute"}
        top={"0px"}
        left={"300px"}
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid
          onRowClick={handleRowClick}
          {...data}
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default Team;
