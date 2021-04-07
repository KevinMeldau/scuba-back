const Skill = require("../models/log");

async function index(req, res) {
	try {
		const logs = await Skill.find({});
		res.status(200).json(logs); // send logs as JSON data as an HTTP response
	} catch (error) {
		console.log(error);
		res.status(400).json({ error: "something went wrong" });
	}
}

async function create(req, res) {
	try {
		const log = await Skill.create(req.body);
		res.status(201).json(log);
		// index(req, res);
	} catch (error) {
		res.status(401).json({ error: "something went wrong" });
	}
}

module.exports = {
	index,
	create,
};
