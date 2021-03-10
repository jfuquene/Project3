class LikedShoesController < ApplicationController
  before_action :set_liked_shoe, only: [:show, :update, :destroy]

  # GET /liked_shoes
  def index
    @liked_shoes = LikedShoe.all

    render json: LikedShoeSerializer.new(@liked_shoes).to_serialized_json
  end

  # GET /liked_shoes/1
  def show
    render json: LikedShoeSerializer.new(@liked_shoe).to_serialized_json
  end

  # POST /liked_shoes
  def create
    @liked_shoe = LikedShoe.new(liked_shoe_params)

    if @liked_shoe.save
      render json: @liked_shoe, status: :created, location: @liked_shoe
    else
      render json: @liked_shoe.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /liked_shoes/1
  def update
    if @liked_shoe.update(liked_shoe_params)
      render json: @liked_shoe
    else
      render json: @liked_shoe.errors, status: :unprocessable_entity
    end
  end

  # DELETE /liked_shoes/1
  def destroy
    @liked_shoe.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_liked_shoe
      @liked_shoe = LikedShoe.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def liked_shoe_params
      params.require(:liked_shoe).permit(:Shoes_id, :Users_id)
    end
end
