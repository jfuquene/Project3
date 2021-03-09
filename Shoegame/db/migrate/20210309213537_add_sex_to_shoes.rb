class AddSexToShoes < ActiveRecord::Migration[6.1]
  def change
    add_column :shoes, :sex, :string
  end
end
