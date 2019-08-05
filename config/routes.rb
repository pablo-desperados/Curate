Rails.application.routes.draw do

  root :to => redirect("/mainpage")


  resources :mainpage, only: [:index]
  devise_for :users

  resources :users, only: [:show] do
    resources :customers, only: [:index, :show, :new, :create]
  end

  namespace :api do
    namespace :v1 do
      resources :users, only: [:show] do
        resources :customers, only: [:index, :show]
      end
        resources :customers, only: [:destroy] do
          resources :diaries, only: [:create, :update, :delete]
        end
    end
  end

end
