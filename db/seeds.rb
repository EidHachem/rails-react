# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
message = Message.create(title: 'Hello World', body: 'This is my first message')
message_2 = Message.create(title: 'Hello World 2', body: 'This is my second message')
message_3 = Message.create(title: 'Hello World 3', body: 'This is my third message')
message_4 = Message.create(title: 'Hello World 4', body: 'This is my fourth message')
message_5 = Message.create(title: 'Hello World 5', body: 'This is my fifth message')
