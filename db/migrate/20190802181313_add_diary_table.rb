class AddDiaryTable < ActiveRecord::Migration[5.2]
  def change
    create_table :diaries do |t|
      t.belongs_to :customer, null: false
      t.string :title, null: false
      t.string :body, null: false
      t.string :label
      t.boolean :favorite, null: false, default: false

      t.timestamps null: false
    end
  end
end
