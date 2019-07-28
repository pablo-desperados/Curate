class Customer < ApplicationRecord

  has_many :relations
  has_many :users, through: :ratings
  
end
