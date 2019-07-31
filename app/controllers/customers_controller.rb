class CustomersController < ApplicationController
  before_action :authenticate_user

  def create
    new_customer = Customer.new(customer_params)
    if new_customer.save
      Relation.create(user: current_user, customer: new_customer)
      flash[:notice]="The user was succesfully submitted!"
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
