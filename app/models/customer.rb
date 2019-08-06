class Customer < ApplicationRecord

  validates_presence_of :first_name, :last_name, :email, :phone_number
  has_many :relations
  has_many :users, through: :ratings
  has_many :diaries

  mount_uploader :profile_picture, CustomerPhotoUploader

  def self.findusers(data)
    diary_information = data.map{|diary| {diary: diary, user: User.find(diary.user_id)}}
    return diary_information
  end
  def self.update_user(customer, payload)
    customer.first_name = payload[:first_name]
    customer.last_name = payload[:last_name]
    customer.email = payload[:email]
    customer.lifecycle_status = payload[:lifecycle_status]
    customer.phone_number = payload[:phone_number]
    customer.title = payload[:title]
    customer.company_name = payload[:company_name]
    customer.location = payload[:location]
    return customer
  end
  def self.lifecycle_status
    @status = ["Not contacted", "Contacted", "New lead","Current customer","Disqualified", "Champion"]
  end

end
