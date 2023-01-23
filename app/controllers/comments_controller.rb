class CommentsController < ApplicationController

    def index
        comments = Comment.all
        render json: comments, status: :created
    end
    
    def destroy
        comment = Comment.find(params[:id])
        comment.destroy
        head :no_content
    end
    
end
