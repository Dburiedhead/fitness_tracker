class AddFieldsToActivities < ActiveRecord::Migration[6.0]
  def change
    add_column :activities, :date, :date
    add_column :activities, :duration, :interval
  end
end
