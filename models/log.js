const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const logSchema = new Schema(
	{
		log: String,
		level: String,
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Skill", logSchema);
