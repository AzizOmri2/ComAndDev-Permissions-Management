class RegistrationsController < ApplicationController


    def create
        user = User.create!(
            email: user_registration_params['email'],
            password: user_registration_params['password'],
            password_confirmation: user_registration_params['password_confirmation'],
            username: user_registration_params['username'],
            avatar: user_registration_params['avatar']
        )

        if user
            session[:user_id] = user.id
            render json: {
                status: :created,
                user: user
            }
        else
            render json: { status: 500 }
        end
    end

    private 
    def user_registration_params
        params.permit(:email, :password, :password_confirmation, :username, :avatar)
    end
end