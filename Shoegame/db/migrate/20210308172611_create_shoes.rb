class CreateShoes < ActiveRecord::Migration[6.1]
  def change
    create_table :shoes do |t|
      t.float :shoes_size
      t.string :color
      t.float :price
      t.string :brand

      t.timestamps
    end
  end
end
