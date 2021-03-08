class Api::V1::UserActivitiesController < ApplicationController
  before_action :set_user_activity, only: [:show, :update, :destroy]

  # GET /user_activities
  def index
    @user_activities = UserActivity.all

    render json: @user_activities
  end

  # GET /user_activities/1
  def show
    render json: @user_activity
  end

  # POST /user_activities
  def create
    @user_activity = UserActivity.new(user_activity_params)

    if @user_activity.save
      render json: @user_activity, status: :created, location: @user_activity
    else
      render json: @user_activity.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_activities/1
  def update
    if @user_activity.update(user_activity_params)
      render json: @user_activity
    else
      render json: @user_activity.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_activities/1
  def destroy
    @user_activity.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_activity
      @user_activity = UserActivity.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_activity_params
      params.require(:user_activity).permit(:user_id, :activity_id, :date, :duration, :description)
    end
end
