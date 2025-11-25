class UsersController < ApplicationController

  # GET /users
  def index
    users = User.all
    render json: users, status: 200
  end

  # GET /users/:id
  def show
    user = User.find_by(id: params[:id])
    if user
      render json: user, status: 200
    else
      render json: { error: "User not found" }, status: 404
    end
  end

  # DELETE /users/:id
  def destroy
    user = User.find_by(id: params[:id])
    if user&.destroy
      render json: { message: "User deleted successfully" }, status: 200
    else
      render json: { error: "User not found or cannot be deleted" }, status: 404
    end
  end
end