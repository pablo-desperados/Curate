require "rails_helper"
require 'shared_contexts'

RSpec.describe Api::V1::CustomersController, type: :controller do
  let!(:test_user_1){User.create(
    first_name: "Pablo",
    last_name: "Mujica",
    email: "me@email.com",
    password: "123456"
    )}
  let!(:test_user_customer_1){Customer.create(
    first_name: "Daniel",
    last_name: "Valentino",
    email:"valentino456@gmail.com",
    lifecycle_status: "Champion",
    phone_number: "8572632345",
    title: "VP of sales",
    company_name: "Computer, inc"
    )}
  let!(:test_user_customer_relation){Relation.create(
    customer_id: test_user_customer_1["id"],
    user_id: test_user_1["id"]
    )}

  let!(:test_customer_diary){Diary.create(
    customer_id: test_user_customer_1["id"],
    title: "Met Daniel for the first time!",
    body:"We talked about possibly bringing his company as a client. He said he wanted a better deal than other partners",
    favorite: false,
    user_id: test_user_1["id"]
    )}

    describe "#index A user can see all of it's customers" do
      it "should give users all the information about their customers" do
        sign_in(test_user_1)
        get :index, params: {user_id: test_user_1["id"]}
        return_json = JSON.parse(response.body)
        list_of_users = return_json.length
        expect(User.find(test_user_1.id).customers.length).to eq(list_of_users)
      end
    end
    
    describe "#index A user can see all of it's customers" do
      it "should give users all the information about their customers" do
        sign_in(test_user_1)
        get :index, params: {user_id: test_user_1["id"]}
        return_json = JSON.parse(response.body)
        list_of_users = return_json.length
        expect(User.find(test_user_1.id).customers.length).to eq(list_of_users)
      end
    end


end
