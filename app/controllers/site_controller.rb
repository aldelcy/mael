class SiteController < ApplicationController


	def landingpage
		@newcontact = Contactrequest.new
	end


end
