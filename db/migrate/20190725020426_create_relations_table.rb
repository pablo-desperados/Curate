class CreateRelationsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :relations do |t|
      t.belongs_to :user, null: false
      t.belongs_to :customer, null: false

      t.timestamps null: false
    end
  end
end
