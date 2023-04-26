const mongoose = require("mongoose");

const userDetailSchema = new mongoose.Schema(
    {
        JOB_NAME : String,
        PROBLEM : String,
        ANALYSIS : String,
        SOLUTION : String,
    },{
        collection:"resolution"
    }
);

mongoose.model("resolution",userDetailSchema);