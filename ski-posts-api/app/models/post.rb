class Post < ApplicationRecord
  belongs_to :ski_route
  belongs_to :user
end
