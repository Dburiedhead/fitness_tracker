# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.all.each do |u|
    3.times do |i|
        u.user_activities.create(activity: i+1, duration: "00:45:00" , date: "2021-03-10", description: "User #{u.email} activity test"  )
    end
end