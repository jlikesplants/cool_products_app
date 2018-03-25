# Load the Rails application.
require_relative 'application'

# Initialize the Rails application.
Rails.application.initialize!

Rails.application.configure do
  config.autoload_paths << "#{Rails.root}/lib"
  config.autoload_paths << "#{Rails.root}/test/lib"
end
