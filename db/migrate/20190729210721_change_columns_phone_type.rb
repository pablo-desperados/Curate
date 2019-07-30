class ChangeColumnsPhoneType < ActiveRecord::Migration[5.2]
  def up
   change_column :customers, :phone_number, :string
  end

  def down
   change_column :customers, :phone_number, :integer
  end
end
