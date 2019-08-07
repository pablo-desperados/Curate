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
    @selected_diary = @customer.diaries.find_by favorite: true
    render json: {customer:@customer, user: @user_info, diaries: @diaries, selected: @selected_diary}
  end

  def destroy
    @customer = Customer.find(params[:id])
    if @customer.id == params[:id].to_i
      @customer.destroy
      @customers = Customer.all
      render json: current_user
    end
  end

    def update
      @customer_to_update = Customer.find(params[:id])
      @customer_updated = Customer.update_user(@customer_to_update, params[:customer])
      @customer_to_update.save

      render json: current_user
    end

  private

  def authenticate_user
    if !user_signed_in?
      render json: {message: "You do not have access to this page."}, status: 404
    end
  end

end
