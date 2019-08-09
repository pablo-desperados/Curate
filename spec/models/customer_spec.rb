require 'rails_helper'
require 'shoulda-matchers'

RSpec.describe Customer, type: :model do

  it{ should have_valid(:first_name).when("Pablo")}
  it{ should validate_presence_of(:first_name).on(:create)}

  it{ should have_valid(:last_name).when("Mujica")}
  it{ should validate_presence_of(:last_name).on(:create)}
  it{ should have_valid(:email).when("test2test.com")}
  it{ should validate_presence_of(:email).on(:create)}
  it{ should have_valid(:phone_number).when(888-888-8888)}
  it{ should validate_presence_of(:phone_number).on(:create)}

  it{ should have_valid(:lifecycle_status).when("Not contacted")}
  it{ should have_valid(:company_name).when("Inc, co")}
  it{ should have_valid(:title).when("CEO")}
  it{ should have_valid(:location).when("CEO")}

  describe "customers should be have many diaries and relations" do
    it "have many relations and customers should return true" do
      should have_many(:diaries)
      should have_many(:relations)
    end
  end

  describe "A customer should be deleted when they have now relations in the Relation table" do
    it "Customer#last_relation should be able to delete the customer" do
      test_customer = Customer.create!(first_name: "Daniel", last_name: "Valentino",email:"valentino456@gmail.com", lifecycle_status: "Champion", phone_number: "8572632345", title: "VP of sales", company_name: "Computer, inc")
      Customer.last_relation(test_customer)
      expect(Customer.all.length).to eq(0)
    end
  end

end
