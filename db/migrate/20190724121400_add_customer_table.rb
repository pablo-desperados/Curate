class AddCustomerTable < ActiveRecord::Migration[5.2]
  def change
    create_table :customers do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :lifecycle_status, null: false

      t.integer :phone_number
      t.string :title, default: "N/A"
      t.string :company_name, default: "N/A"
      t.string :location, default: "N/A"
      t.string :profile_picture

      t.timestamps null: false
    end
  end
end
