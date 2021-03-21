class ApplicationController < ActionController::Base

    before_action :set_user
    
    private
        def set_user
            if current_user.present?
                cookies[:useremail] = current_user.email
            end
        end
end
