class Api::V1::SessionsController < ApplicationController

    # GET /activities
    def index
        @user = User.all

        render json: @user
    end

    # POST /sessions
    def create

    end

    # DELETE /sessions
    def destroy

    end
end