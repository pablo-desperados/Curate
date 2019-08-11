require "rails_helper"
require 'shared_contexts'

RSpec.describe Api::V1::UsersController, type: :controller do
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

  let!(:test_user_2){User.create(
    first_name: "Tom",
    last_name: "Hillfiger",
    email: "you@email.com",
    password: "123456"
    )}

    describe "#search A User can search for other users" do
      it "Should return the profiles of users that match the query" do
        sign_in(test_user_1)
        get :search, params: {search_string: "Tom"}
        return_json = JSON.parse(response.body)
        expect(return_json[0]["user"]["id"]).to eq(test_user_2["id"])
      end

      it "Should no users if there is no matches" do
        sign_in(test_user_1)
        get :search, params: {search_string: "King George"}
        return_json = JSON.parse(response.body)
        expect(return_json.length).to eq(0)
      end

    end

    describe "#index A User can seel all other users" do
      it "Should return a list of all the available users" do
        sign_in(test_user_1)
        get :index
        return_json = JSON.parse(response.body)
        expect(return_json.length).to eq(2)
      end
    end

    describe "#show A User can see another user's dashboard" do
      it "Should return all the information of a certain user, alongside their customer list" do
        sign_in(test_user_2)
        get :show, params: {id: test_user_1["id"]}
        return_json = JSON.parse(response.body)

        expect(return_json["customers"][0]["first_name"]).to eq("Daniel")
        expect(return_json["customers"][0]["last_name"]).to eq("Valentino")

        expect(return_json["user"]["first_name"]).to eq("Pablo")
        expect(return_json["user"]["last_name"]).to eq("Mujica")

        expect(return_json["current_user"]["first_name"]).to eq("Tom")
        expect(return_json["current_user"]["last_name"]).to eq("Hillfiger")

      end
    end

end
