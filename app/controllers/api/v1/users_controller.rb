class Api::V1::UsersController < ApiController

  def search
    @searched_users = User.where("first_name ILIKE ?", "%#{params['search_string']}%")
    @searched_users = User.find_customer_num(@searched_users)
    @searched_users = @searched_users.keep_if{|user| user[:user].id != current_user.id}
    render json: @searched_users
  end

  def index
    @complete_info = User.find_customer_num(User.all)
    @all_users = @complete_info.keep_if{|user| user[:user].id != current_user.id}
    render json: {users: @complete_info, current_user: current_user}
  end

end
