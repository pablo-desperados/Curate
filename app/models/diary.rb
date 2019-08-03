class Diary < ApplicationRecord
  belongs_to :customer_params

  validates_presence_of :title, :body, :user_id, :label, :favorite

end
