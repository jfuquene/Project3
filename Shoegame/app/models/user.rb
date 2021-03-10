class User < ApplicationRecord
    has_many :liked_shoes
    has_many :shoes, through: :liked_shoes
end
