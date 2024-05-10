Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  root to: 'sessions#index'



  #DemandeConge
  get '/demandeConge', to: 'conges#index'
  get '/demandeConge/:id', to: 'conges#show'
  post '/demandeConge', to: 'conges#create'
  put '/demandeConge/:id', to: 'conges#update'
  delete '/demandeConge/:id', to: 'conges#destroy'
  put '/demandeCongeStatus/:id', to: 'conges#status'


  #User
  get '/sessions', to: 'sessions#index'
  get '/sessions/:id', to: 'sessions#show'
  post '/sessions', to: 'sessions#create'


  resources :sessions, only: [:create, :index, :show, :logout]
  resources :registrations, only: [:create]
  delete :logout, to: "sessions#logout"
  get :logged_in, to: "sessions#logged_in"


end
