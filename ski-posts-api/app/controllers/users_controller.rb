class UsersController < ApplicationController
    def create
      user = User.new(user_params)
  
      if user.save
        render json: { message: 'User created successfully' }, status: :created
      else
        render json: user.errors, status: :unprocessable_entity
      end
    end
  
    private
  
    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
    end
  end
  