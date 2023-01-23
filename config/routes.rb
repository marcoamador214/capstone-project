Rails.application.routes.draw do
  
  # resources :comments, only: [:index, :create]
  # resources :questions, only: :index
  # resources :users

  post '/signup', to: "users#create"
  post '/login', to: "sessions#create"
  post '/addcomment', to: "comments#create"

  get '/auth', to: "users#show"
  get '/questions', to: "questions#index"
  get '/user', to: "users#show"
  get '/comments', to: "comments#index"

  delete '/logout', to: "sessions#destroy"
  delete '/comments/:id', to: "comments#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
