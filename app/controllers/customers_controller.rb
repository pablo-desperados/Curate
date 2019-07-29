class CustomersController < ApplicationController
  before_action :authenticate_user

  def create
    customer = Customer.new(customer_params)
    binding.pry
    if customer.save
      binding.pry
    end
  end

  def new
    @customer = Customer.new
  end

  def authenticate_user
    if !user_signed_in?
      flash[:notice]="You don't have access to this page. Please sign in."
      redirect_to new_user_registration_path
    end
  end

  private
  def customer_params
    params.require(:customer).permit(:first_name, :last_name, :email, :lifecycle_status, :phone_number, :title, :company_name, :location, :profile_picture)
  end

end
