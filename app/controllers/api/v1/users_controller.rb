class Api::V1::UsersController < ApiController

  def search
    @searched_users = User.where("first_name ILIKE ?", "%#{params['search_string']}%")
    @searched_users = User.find_customer_num(@searched_users)
    render json: @searched_users
  end

  def index
    @complete_info = User.find_customer_num(User.all)
    render json: @complete_info
  end

end
