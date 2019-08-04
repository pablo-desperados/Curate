class Api::V1::DiariesController < ApiController
  before_action :authenticate_user

  def create
    @diary = Diary.new(diary_params)
    @customer = Customer.find(params[:customer_id])
    @diary.customer = @customer

    if @diary.save
      render json: @customer.diaries
    end

  end


  private
  def authenticate_user
    if !user_signed_in?
      render json: {message: "You do not have access to this page."}, status: 404
    end
  end

  def diary_params
    params.require(:diary).permit(:title, :body, :customer_id)
  end

end
