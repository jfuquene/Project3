

shoe1 = Shoe.create(shoes_size: 78, color:"red", price:150.5, brand:"nike")

user1 = User.create(username:"Json")

json = LikedShoe.create(shoe:shoe1, user:user1)


