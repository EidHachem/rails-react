module Api
  module V1
    class MessagesController < ApplicationController
      def index
        count = Message.count
        random_offset = rand(count)
        message = Message.offset(random_offset).first

        if message
          render json: { status: 'SUCCESS', message: 'Fetched all the messages successfully', data: message },
                 status: :ok
        else
          render json: messages.errors, status: :bad_request
        end
      end
    end
  end
end
