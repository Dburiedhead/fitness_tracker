class Api::V1::ActivitiesController < ApplicationController
    before_action :authenticate_user!
    before_action :set_activity, only: [:show, :update, :destroy]

  # GET /activities
  def index
    @activities = Activity.all

    render json: @activities
  end

  # GET /activities/1
  def show
    render json: @activity
  end

  # POST /activities
  def create
    @activity = Activity.new(activity_params)

    if @activity.save
      render json: @activity, status: :created, location: api_v1_activity_url(@activity)
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

end
