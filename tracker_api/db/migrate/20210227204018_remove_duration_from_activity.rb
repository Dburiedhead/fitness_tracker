class RemoveDurationFromActivity < ActiveRecord::Migration[6.0]
  def change
    remove_column :activities, :duration
    remove_column :activities, :date
  end
end
