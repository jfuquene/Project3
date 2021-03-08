class CreateLikedShoes < ActiveRecord::Migration[6.1]
  def change
    create_table :liked_shoes do |t|
      t.references :shoe, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
