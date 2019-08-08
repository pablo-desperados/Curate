Rails.application.routes.draw do

  root :to => redirect("/mainpage")

  resources :mainpage, only: [:index]
  devise_for :users


  resources :users, only: [:index, :show] do
    resources :customers, only: [:index, :show, :new, :create, :edit]
  end

  namespace :api do
    namespace :v1 do
      post 'users/search', to: 'users#search'
      get 'users', to: 'users#index'
      resources :users, only: [:show] do
        resources :customers, only: [:index, :show, :edit, :create]
      end
      resources :customers, only: [:destroy, :show, :update] do
        resources :diaries, only: [:create, :update, :destroy]
      end
    end
  end

end
