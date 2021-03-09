class AddImageToShoes < ActiveRecord::Migration[6.1]
  def change
    add_column :shoes, :image, :string
  end
end
