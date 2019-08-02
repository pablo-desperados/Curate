class CustomersController < ApplicationController
  before_action :authenticate_user


  def create
    @new_customer = Customer.new(customer_params)
    if @new_customer.save
      Relation.create(user: current_user, customer: @new_customer)
      redirect_to user_customer_path(current_user, @new_customer)
    else
      redirect_to user_customers_path(current_user)
      flash[:notice]="There was an error in your submission"
    end
  end

  def new
    @customer = Customer.new
  end

  def show
    @customer =Customer.find(params[:id])
  end

  def authenticate_user
    if !user_signed_in?
      flash[:notice]="You don't have access to this page. Please sign in."
      redirect_to new_user_registration_path
    end
  end

  private
  def customer_params
    params.fetch(:customer, {}).permit(:first_name, :last_name, :email, :lifecycle_status, :phone_number, :title, :company_name, :location, :profile_picture)
  end

end
