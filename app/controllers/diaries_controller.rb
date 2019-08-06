class DiariesController < ApplicationController
  before_action :authenticate_user

  private
  def authenticate_user
    if !user_signed_in?
      flash[:notice]="You don't have access to this page. Please sign in."
      redirect_to new_user_registration_path
    end
  end

end
