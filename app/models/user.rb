class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  validates :first_name, presence: true
  validates :last_name, presence: true

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :relations
  has_many :diaries
  has_many :customers , through: :relations

  mount_uploader :profile_photo, ProfilePhotoUploader

  def self.find_customer_num(users)
    @complete_info = users.map{|user| {user: user, user_num: user.customers.length}}
  end

end
