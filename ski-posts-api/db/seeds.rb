# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#

SkiRoute.create([
  { name: 'Belle Fourche', part_of_mountain: 'Eagle Wind', difficulty: 3 },
  { name: 'Black Coal', part_of_mountain: 'Eagle Wind', difficulty: 3 },
  { name: 'Eagle Wind', part_of_mountain: 'Eagle Wind', difficulty: 3 },
  { name: 'Left Hand', part_of_mountain: 'Eagle Wind', difficulty: 3 },
  { name: 'Little Raven', part_of_mountain: 'Eagle Wind', difficulty: 3 },
  { name: 'Medicine Man', part_of_mountain: 'Eagle Wind', difficulty: 3 },
  { name: 'Sharpnose', part_of_mountain: 'Eagle Wind', difficulty: 3 },
  { name: 'Thunderbird', part_of_mountain: 'Eagle Wind', difficulty: 3 },
  { name: 'Thunderbird Traverse', part_of_mountain: 'Eagle Wind', difficulty: 3 }
])

ski_routes = SkiRoute.all

Post.create([
  { title: 'Awesome Day at Belle Fourche', description: 'Had an incredible day skiing at Belle Fourche. The snow was perfect!', date: '2024-10-01', ski_route: ski_routes[0] },
  { title: 'Challenging Black Coal', description: 'Black Coal was tough but rewarding! Definitely coming back!', date: '2024-10-02', ski_route: ski_routes[1] },
  { title: 'Eagle Wind Experience', description: 'Eagle Wind offers some of the best views! A must-try for all skiers.', date: '2024-10-03', ski_route: ski_routes[2] },
  { title: 'Left Hand Fun', description: 'Left Hand had some exciting twists and turns! A great trail for intermediate skiers.', date: '2024-10-04', ski_route: ski_routes[3] },
  { title: 'Little Raven Adventure', description: 'Little Raven is perfect for a quick ski session. Enjoyed every moment!', date: '2024-10-05', ski_route: ski_routes[4] }
])
