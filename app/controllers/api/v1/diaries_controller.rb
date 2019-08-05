class Api::V1::DiariesController < ApiController
  before_action :authenticate_user

  def create
    @diary = Diary.new(diary_params)
    @customer = Customer.find(params[:customer_id])
    @diary.customer = @customer
    @diary.user = current_user
    if @diary.save
      @diaries = Customer.findusers(@customer.diaries)
      render json: @diaries
    end
  end

  def update
    @customer = Customer.find(params[:customer_id])
    @diary_to_update = Diary.find(params[:diary][:id])
    @past_favorite = @customer.diaries.find_by favorite: true
    if !@past_favorite.nil?
      @past_favorite.favorite = false
      @past_favorite.save
    end

    @diary_to_update.favorite= true

    if @diary_to_update.save
      render json: @diary_to_update
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
