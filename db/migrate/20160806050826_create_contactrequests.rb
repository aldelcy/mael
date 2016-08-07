class CreateContactrequests < ActiveRecord::Migration[5.0]
  def change
    create_table :contactrequests do |t|
    	
    	t.string  :firstname
    	t.string  :lastname
    	t.string  :phone_number
    	t.string  :email
    	t.string  :company
    	t.string  :contact_message

      t.timestamps
    end
  end
end
