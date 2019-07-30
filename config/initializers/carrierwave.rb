CarrierWave.configure do |config|
  if !Rails.env.test?
    config.fog_credentials ={
      provider: "AWS",
      aws_access_key_id: ENV["AWS_KEY"],
      aws_secret_access_key: ENV["AWS_SECRET"],
      region:'us-east-2'
    }
    config.fog_directory  = ENV["S3_BUCKET"]
  end
end
