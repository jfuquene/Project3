class AddLikeToShoes < ActiveRecord::Migration[6.1]
  def change
    add_column :shoes, :like, :boolean
  end
end
