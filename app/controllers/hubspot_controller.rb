class HubspotController < ApplicationController
  require 'json'

  def index
    @access_code = get_access(params['code'])
    @access_information = get_info(@access_code)
    create_customers(@access_information)
    redirect_to user_customers_path(current_user)
  end

  private

  def get_access(token_code)
    @response = HTTParty.post("https://api.hubapi.com/oauth/v1/token?grant_type=authorization_code&client_id=#{ENV['HUBSPOT']}&client_secret=#{ENV['SECRET_KEY']}&redirect_uri=https://curate-io.herokuapp.com/oauth-callback&code=#{token_code}")
  end

  def get_info(_credentials)
    @contacts = HTTParty.get("https://api.hubapi.com/contacts/v1/lists/all/contacts/all?hapikey=#{ENV['HUBSPOT_API']}&property=firstname&property=lastname&property=email&property=phone&property=jobtitle&property=company")
  end

  def create_customers(customer_list)
    customer_list.each do |customer|
      next unless customer[0] == 'contacts'

      Customer.create(
        first_name: customer[1][0]['properties']['firstname']['value'],
        last_name: customer[1][0]['properties']['lastname']['value'],
        email: customer[1][0]['properties']['email']['value'],
        phone_number: customer[1][0]['properties']['phone']['value'],
        lifecycle_status: 'Contacted',
        title: customer[1][0]['properties']['jobtitle']['value']
      )
      Relation.create(customer_id: Customer.last['id'], user_id: current_user.id)
    end
  end
end
