
exports.up =  async function(knex) {
    await knex.schema.createTable("recipes",(table)=>{
        table.increments("id")
        table.text("name").notNull()
        
      })
      await knex.schema.createTable("ingredients", (table)=>{
        table.increments("id")
        table.text("name").notNull().unique()
        table.text()
    })

  
};

exports.down = function(knex) {
    await knex.schema.dropTableIfExists("recipes")
    await knex.schema.dropTableIfExists("ingredients")
    await knex.schema.dropTableIfExists("")
  
};
