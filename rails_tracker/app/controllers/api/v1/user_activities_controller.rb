class Api::V1::UserActivitiesController < ApplicationController
    before_action :authenticate_user!
    before_action :set_user_activity, only: [:show, :edit, :update, :destroy]
    def index
        @user_activities = current_user.user_activities.all
    end
    
    def show
        if authorized?
            respond_to do |format|
                format.json { render :show }
            end
        # else
        #     handle_unauthorized
        end
    end
    
    def create
        @user_activity = current_user.user_activitys.build(user_activity_params)
        if authorized?
            respond_to do |format|
                if @user_activity.save
                    format.json { render :show, status: :created, location: api_v1_user_activity_path(@user_activity) }
                else
                    format.json { render json: @user_activity.errors, status: :unprocessable_entity }
                end
            end
        # else
        #     handle_unauthorized
        end
    end
    
    def update
        if authorized?
            respond_to do |format|
                if @user_activity.update(user_activity_params)
                    format.json { render :show, status: :ok, location: api_v1_user_activity_path(@user_activity) }
                else
                    format.json { render json: @user_activity.errors, status: :unprocessable_entity }
                end
            end
        # else
        #     handle_unauthorized
        end
    end
    
    def destroy
        if authorized?
            @user_activity.destroy
            respond_to do |format|
                format.json { head :no_content }
            end
        # else
        #     handle_unauthorized
        end
    end
    
    private
        def set_user_activity
            @user_activity = TodoItem.find(params[:id])
        end

        def authorized?
            @user_activity.user == current_user
        end

        def user_activity_params
            params.require(:user_activity).permit(:activity, :complete)
            params.require(:user_activity).permit(:duration, :complete)
            params.require(:user_activity).permit(:date, :complete)
        end
end
