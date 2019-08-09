require 'rails_helper'
require 'shoulda-matchers'

RSpec.describe Diary, type: :model do
  it{ should belong_to(:customer)}
  it{ should belong_to(:user)}

  it{ should validate_presence_of(:title).on(:create)}
  it{ should validate_presence_of(:body).on(:create)}
  it{ should validate_presence_of(:customer_id).on(:create)}

  it "The favorite column should be boolean, never null/undefined" do
    should validate_inclusion_of(:favorite).in_array([true, false])
  end

end
