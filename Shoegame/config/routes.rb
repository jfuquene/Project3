Rails.application.routes.draw do
  resources :liked_shoes
  resources :users
  resources :shoes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
