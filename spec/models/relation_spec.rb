require 'rails_helper'
require 'shoulda-matchers'
RSpec.describe Relation, type: :model do

  it { should belong_to(:user) }
  it { should belong_to(:customer) }
  
  describe "A new relation should always have a user id and customer id" do
    it "A correctly formated relationship shoud be saved to the database" do
      test_user = User.create!(first_name: "Pablo", last_name: "Mujica",email:"pblmjc1@gmail.com", password:"TestPassword123")
      test_customer = Customer.create!(first_name: "Daniel", last_name: "Valentino",email:"valentino456@gmail.com", lifecycle_status: "Champion", phone_number: "8572632345", title: "VP of sales", company_name: "Computer, inc")
      relation = Relation.create!(customer_id: test_customer.id, user_id: test_user.id)
      expect(Relation.all.length).to eq(1)
    end
    it "A correctly formated relationship shoud be saved to the database" do
      test_user = User.create!(first_name: "Pablo", last_name: "Mujica",email:"pblmjc2@gmail.com", password:"TestPassword123")
      relation = Relation.new(user_id: test_user.id)
      expect(relation.valid?).to eq(false)
    end

  end


end
