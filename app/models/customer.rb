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
  
  def self.lifecycle_status
    @status = ["Not contacted", "Contacted", "New lead","Current customer","Disqualified", "Champion"]
  end

end
