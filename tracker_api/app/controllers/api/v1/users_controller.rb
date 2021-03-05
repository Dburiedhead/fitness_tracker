class Api::V1::UsersController < ApplicationController

    # GET /users
    def index
        @users = User.all

        render json: @users
    end

    # GET /users
    def show
        render json: @user
    end

    # POST
    def create
        @user = User.new(user_params)
    
        if @user.save
            render json: @user, status: :created, location: api_v1_user_url(@user)
        else
            render json: @user.errors, status: :unprocessable_entity
        end
    end
    # before_action :find_user, only: %w[show]
  
    # def show
    #     render_jsonapi_response(@user)
    # end
  
    # private
  
    # def find_user
    #     @user = User.find(params[:id])
    # end
  
end