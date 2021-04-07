const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema(
	{
		country: String,
		site: String,
		condition: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Log", logSchema);
