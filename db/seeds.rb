# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

project1 = Project.create(name: "Study JavaScript", description: "Obtain a strong grasp of JavaScript fundamentals" )
project2 = Project.create(name: "Implement a workout routine", description: "Create and follow a full-body gym routine every week")

task1 = Task.create(content: "Study JS Data types and functions", project_id: 1)
task2 = Task.create(content: "Review arrow functions", project_id: 1)
task3 = Task.create(content: "Purchase gym membership", project_id: 2)

