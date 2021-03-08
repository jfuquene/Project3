class LikedShoe < ApplicationRecord
  belongs_to :shoe
  belongs_to :user
end
