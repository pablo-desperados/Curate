require 'rails_helper'

feature 'user signs in', %Q{
  As a signed up user
  I want to sign in
  So that I can regain access to my account
} do
  scenario 'specify valid credentials' do
    user = User.create(
      first_name: "John",
      last_name: "Smith",
      email: "jsmith@email.com",
      password: "password")
    visit new_user_session_path

    fill_in 'Email', with: user.email
    fill_in 'Password', with: user.password

    click_button 'Log in'
    expect(page).to have_content('SIGN OUT')
    expect(page).to have_content('Create a story')
  end

  scenario 'specify invalid credentials' do
    visit new_user_session_path

    click_button 'Log in'
    expect(page).to_not have_content('Sign Out')
  end
end
