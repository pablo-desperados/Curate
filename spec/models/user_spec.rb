require 'rails_helper'

RSpec.describe User, type: :model do

  it {should have_many(:customers).through(:relations)}
  it {should have_many(:diaries)}
  it {should have_many(:relations)}

  it { should have_valid(:first_name).when("Pablo") }
  it { should_not have_valid(:first_name).when(nil,"") }

  it { should have_valid(:last_name).when("Mujica") }
  it { should_not have_valid(:last_name).when(nil,"") }

  it { should have_valid(:email).when("pablo@mail.com") }
  it { should_not have_valid(:email).when(nil,"") }

  it { should have_valid(:password).when("1234567") }
  it { should_not have_valid(:email).when(nil,"") }

  describe "User should be able to not choose a profile picture when signing up" do
    it "User table should have a record with a default profile picture" do
      user = User.new(first_name: "pablo", last_name: "Mujica",email:"pblmjc@gmail.com", password:"TestPassword123")
      user.save
      expect(User.all.length).to eq(1)
      expect(User.first.id).to eq(user.id)
    end
  end

  describe "User#find_customer_num should return the number of a user's customers" do
    it "user should see the number of its relationships" do
      user = User.create!(first_name: "pablo", last_name: "Mujica",email:"pblmjc@gmail.com", password:"TestPassword123")
      customer1 = Customer.create!(first_name: "Tom", last_name: "Hills", email:"t.hills987@email.com", lifecycle_status: "Champion", phone_number: "8572651439", title: "Founder", company_name: "Hills Equity", location: "Boston, MA")
      relationship = Relation.create!(user_id: user.id, customer_id: customer1.id)
      complete_user_info= User.find_customer_num( User.where(id: user.id))

      expect(complete_user_info[0][:user_num]).to eq(1)
      expect(complete_user_info[0][:user]).to eq(user)
    end
  end


end
