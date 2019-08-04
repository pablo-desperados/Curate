class AddUserIdColumn < ActiveRecord::Migration[5.2]
  def change
    add_reference :diaries, :user, foreign_key: true, null: false
  end
end
