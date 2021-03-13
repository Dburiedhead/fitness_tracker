class AddFieldsToActivities < ActiveRecord::Migration[6.0]
  def change
    add_column :activities, :description, :text
  end
end
