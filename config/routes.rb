Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :projects, only: [:index, :show, :create, :destroy] do
        resources :tasks, only: [:index, :show, :update, :create, :destroy]
    end
  end
end
end
