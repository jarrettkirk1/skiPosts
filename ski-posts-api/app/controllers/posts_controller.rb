class PostsController < ApplicationController
    # GET /posts
    def index
      @posts = Post.all
      render json: @posts
    end
  
    # POST /posts
    def create
      @post = Post.new(post_params)
      if @post.save
        render json: @post, status: :created
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    # GET /posts/:id
    def show
      @post = Post.find(params[:id])
      render json: @post
    end
  
    # PATCH/PUT /posts/:id
    def update
      @post = Post.find(params[:id])
      if @post.update(post_params)
        render json: @post
      else
        render json: @post.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /posts/:id
    def destroy
      @post = Post.find(params[:id])
      @post.destroy
      head :no_content
    end
  
    private
  
    def post_params
      params.require(:post).permit(:title, :description, :date, :ski_route_id)
    end
  end
  