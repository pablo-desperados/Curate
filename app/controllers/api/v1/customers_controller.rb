class Api::V1::CustomersController < ApiController
  before_action :authenticate_user

  def index
    @user_customers = current_user.customers
    render json: @user_customers
  end

  def show
    @customer = Customer.find(params[:id])
    @user_info = current_user
    @diaries = Customer.findusers(@customer.diaries)
    render json: {customer:@customer, user: @user_info, diaries: @diaries}
  end

  def destroy
    @customer = Customer.find(params[:id])
    if @customer.id == params[:id].to_i
      @customer.destroy
      @customers = Customer.all
      render json: current_user
    end
  end

  private

  def authenticate_user
    if !user_signed_in?
      render json: {message: "You do not have access to this page."}, status: 404
    end
  end

end
