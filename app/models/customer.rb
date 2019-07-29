class Customer < ApplicationRecord
  validates_presence_of :first_name, :last_name, :email, :phone_number
  has_many :relations
  has_many :users, through: :ratings

  def self.lifecycle_status
    @status = ["Not contacted", "Contacted", "New lead","Current customer","Disqualified", "Champion"]
  end

end
