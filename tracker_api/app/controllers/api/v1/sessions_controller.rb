class Api::V1::SessionsController < ApplicationController

    # GET /users
    def index
        @user = User.all

        render json: @user
    end

    # POST /users
    def create

    end

    # DELETE /sessions
    def destroy

    end
end