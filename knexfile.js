module.exports = {
	development: {
		client: "sqlite3",
		useNullAsDefault: true, 
		connection: {
			filename: "",
		},
		migrations: {
			directory: "",
		},
		seeds: {
			directory: "",
		},

	
		pool: {
			afterCreate: (conn, done) => {
				
				conn.run("PRAGMA foreign_keys = ON", done) 
			},
		},
	},
}