Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :activities
      resources :user_activities
      resources :users, only: [:index, :create, :destroy]
    end
    # resources :users, only: %w[show]
    # resources :sessions, only: [:index, :create, :destroy]
  end
  devise_for :users,
  # default: { format: :json },
  path: '',
  path_names: {
    registration: 'api/v1/registration',
    sign_in: 'api/v1/login',
    sign_out: 'api/v1/logout',
  },
  controllers: {
    # sessions: 'sessions',
    registrations: 'registrations'
  }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
