Rails.application.routes.draw do
  devise_for :users
  authenticated :user do
    root 'pages#activities', as: :authenticated_root
    # get 'pages#profile'
  end
  root 'pages#home'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :user_activities, only: [:index, :show, :create, :update, :destroy]
      resources :activities
    end
  end
  # match '*path', to: 'page#index', via: :all
end
