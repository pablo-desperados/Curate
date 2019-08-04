class Diary < ApplicationRecord
  belongs_to :customer

  validates_presence_of :title, :body, :customer_id
  validates :favorite, inclusion: { in: [ true, false ] }
  

end
