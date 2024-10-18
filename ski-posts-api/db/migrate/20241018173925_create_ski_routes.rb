class CreateSkiRoutes < ActiveRecord::Migration[7.2]
  def change
    create_table :ski_routes do |t|
      t.string :name
      t.string :part_of_mountain
      t.integer :difficulty

      t.timestamps
    end
  end
end
