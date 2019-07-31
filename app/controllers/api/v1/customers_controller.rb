class Api::V1::CustomersController < ApiController
  before_action :authenticate_user

  def index
    @user_customers = current_user.customers
    render json: @user_customers
  end

  private

  def authenticate_user
    if !user_signed_in?
      render json: {message: "You do not have access to this page."}, status: 404
    end
  end

end
