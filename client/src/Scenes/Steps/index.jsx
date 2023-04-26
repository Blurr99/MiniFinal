import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Steps = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "JOB_NAME",
      headerName: "Job Name",
    },
    {
      field: "PROBLEM",
      headerName: "Problem",
      type: "number",
    },
    {
      field: "ANALYSIS",
      headerName: "Analysis",
      flex: 1,
    },
    {
      field: "SOLUTION",
      headerName: "Solution",
      flex: 1,
    },
  ];

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://server-tzfy.onrender.com", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data.data);
      });
  }, []);

  const navigate = useNavigate();
  const handleRowClick = (params) => {
    // console.log("return works");
    var name = params.row.JOB_NAME;
    var problem = params.row.PROBLEM;
    var analysis = params.row.ANALYSIS;
    var solution = params.row.SOLUTION;
    
    navigate("/details", {state : {name : name, problem : problem, analysis : analysis, solution : solution}});
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
          onRowClick={handleRowClick} {...data}
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default Steps;
