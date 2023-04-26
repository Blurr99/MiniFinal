const mongoose = require("mongoose");

const homeSchema = new mongoose.Schema(
    {
        id : String,
        state : String,
        opened_at : String,
        description : String,
        assigned_to : String,
        assigned_group : String,
        resolved_by : String
    },{
        collection : "home"
    }
);
mongoose.model("home",homeSchema);