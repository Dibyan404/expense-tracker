Rails.application.routes.draw do
  devise_for :users
  # sets up your routes for signing up, logging in, logging out, 


  
  # get 'home/index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'home/index'

  root to: 'home#index'
  
end
