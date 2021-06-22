# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) This is a controller class from a model called BlogPost that is inheriting from the application controller
class BlogPostsController < ApplicationController
  def index
    # ---2) Declaring a variable Active Record query for all the instances of BlogPost
    @posts = BlogPost.all
  end

  def show
    # ---3) Declaring a variable that is holding an Active Record query get one instance by id, the id is coming from params
    @post = BlogPost.find(params[:id])
  end

  # ---4) Defining a method that allows the user to enter information in a form
  def new
    @post = Post.new
  end

  def create
    # ---5) Active Record query that creates a new instance, called the strong params method that defines the columns allowed to be accessed by the user
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  # ---6) Define a method that will display a form to edit one post
  def edit
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) Active record query that is called on a single instance in the db, calling the update method, defining what columns can be updated with strong params
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) If the destroy is not valid it will redirect to show page of this post
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) Rails helper method, anything below this line can only be called inside of the class
  private
  def blog_post_params
    # ---10) Defines the parameters required to make a blog post, what columns the users have access to - title and content
    params.require(:blog_post).permit(:title, :content)
  end

end
