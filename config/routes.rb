Rails.application.routes.draw do
  resources :contactrequests
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "site#landingpage"

  devise_for :users


end
