class ApplicationController < ActionController::Base

    before_action :set_user
    
    private
        def set_user
            cookies[:useremail] = current_user.email || 'guest'
        end
end
