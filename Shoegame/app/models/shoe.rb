class Shoe < ApplicationRecord
    has_many :liked_shoes
    has_many :users, through: :liked_shoes
end
