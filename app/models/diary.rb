class Diary < ApplicationRecord
  belongs_to :customer
  belongs_to :user
  validates_presence_of :title, :body, :customer_id
  validates :favorite, inclusion: { in: [ true, false ] }


end
