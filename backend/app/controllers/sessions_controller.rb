class SessionsController < ApplicationController
    include CurrentUserConcern


    def index
        users = User.all()
        render json:users, status: 200
    end


    def create
        user = User
            .find_by(email: user_params["email"])
            .try(:authenticate, user_params["password"])

        if user
            session[:user_id] = user.id
            render json: {
                status: :created,
                logged_in: true,
                user: user
            }
        else
            render json: { status: 401 } 
        end
    end


    def show
        user = User.find_by(id:params[:id])
        if user
            render json:user, status: 200
        else
            render json: { error: "User not found!" }
        end
    end


    def logged_in
        if @current_user
            render json: {
                logged_in: true,
                user: @current_user
            }
        else
            render json: {
                logged_in: false
            }
        end
    end

    def logout 
        reset_session
        render json: {
            status: 200,
            logged_out: true
        }
    end

    private 
    def user_params
        params.permit(:email, :password)
    end

end