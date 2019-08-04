class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable

  validates :first_name, presence: true
  validates :last_name, presence: true

  has_many :relations
  has_many :diaries
  has_many :customers , through: :relations


  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end
