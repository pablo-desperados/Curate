require 'rails_helper'
require 'capybara/rspec'


feature "Create customer form" do
  before :each do
    @user = User.create!(first_name: "John", last_name: "Smith", email: "jsmith@email.com",  password: "password")
    visit new_user_session_path
    fill_in "Email", with: @user.email
    fill_in "Password", with: @user.password
    click_button "Log in"
  end

  scenario "Create a customer successfully will take me to a customer's show page" do

    visit "/users/#{@user.id}/customers/new"

    fill_in "First name", with: "pablo"
    fill_in "Last name", with: "Mujica"
    fill_in "Email", with: "234234234@3432423423.com"
    fill_in "Phone number", with: "234567890987654"

    click_button "Create Customer"

    expect(page).to have_current_path("/users/#{@user.id}/customers/#{Customer.last.id}")

  end

  scenario "Creating a customer unsuccessfully will give out error messages" do

    visit "/users/#{@user.id}/customers/new"

    fill_in "First name", with: "pablo"
    fill_in "Last name", with: "Mujica"

    click_button "Create Customer"

    expect(page).to have_content("Email can't be blank")
    expect(page).to have_content("Phone number can't be blank")A
    expect(page).to have_current_path("/users/#{@user.id}/customers/new")

  end

end
