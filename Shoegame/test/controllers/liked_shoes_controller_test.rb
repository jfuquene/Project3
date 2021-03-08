require "test_helper"

class LikedShoesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @liked_shoe = liked_shoes(:one)
  end

  test "should get index" do
    get liked_shoes_url, as: :json
    assert_response :success
  end

  test "should create liked_shoe" do
    assert_difference('LikedShoe.count') do
      post liked_shoes_url, params: { liked_shoe: { Shoes_id: @liked_shoe.Shoes_id, Users_id: @liked_shoe.Users_id } }, as: :json
    end

    assert_response 201
  end

  test "should show liked_shoe" do
    get liked_shoe_url(@liked_shoe), as: :json
    assert_response :success
  end

  test "should update liked_shoe" do
    patch liked_shoe_url(@liked_shoe), params: { liked_shoe: { Shoes_id: @liked_shoe.Shoes_id, Users_id: @liked_shoe.Users_id } }, as: :json
    assert_response 200
  end

  test "should destroy liked_shoe" do
    assert_difference('LikedShoe.count', -1) do
      delete liked_shoe_url(@liked_shoe), as: :json
    end

    assert_response 204
  end
end
