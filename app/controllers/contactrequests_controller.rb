class ContactrequestsController < ApplicationController

	def create
		contact_entry = Contactrequest.create(contact_params)
		contact_entry.save
		# 	redirect_to '/'
		# end
	end

	private

	def contact_params
		params.require(:contactrequest).permit(:firstname, :lastname, :email)
	end

end
