class UserActivity < ApplicationRecord
  default_scope { order(created_at: :desc) }

  belongs_to :user
  belongs_to :activity

  validates :activity, presence: true
  validates :duration, presence: true
  validates :date, presence: true

end
