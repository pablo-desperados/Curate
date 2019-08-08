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
      Relation.find_by(user_id: current_user.id, customer_id: @customer.id).destroy
      Customer.last_relation(@customer)
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

    def create
      @new_relation = Relation.new(user: current_user, customer_id: params[:id])
      @find_relation = Relation.find_by(user_id: current_user.id, customer_id: params[:id])
      if @find_relation.nil?
        @new_relation.save
        render json: current_user
      else
        @warning = "You this customer's profile already"
        render json: {warning: @warning}
      end

    end

  private

  def authenticate_user
    if !user_signed_in?
      render json: {message: "You do not have access to this page."}, status: 404
    end
  end

end
