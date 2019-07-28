class Relation < ApplicationRecord
  validates :user_id ,presence: true
  validates :customer_id, presence: true
  belongs_to :customer
  belongs_to :user

end
