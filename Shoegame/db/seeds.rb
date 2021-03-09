





ultraboost = Shoe.create(shoes_size: 10, color:"white", price: 200, brand:"adidas", image:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/a03362c76f354df2a43fac210106fb50_9366/Ultraboost_4.0_DNA_Shoes_White_G55461_01_standard.jpg", name:"ultraboost", sex:"male")
yeezyboost = Shoe.create(shoes_size: 10.5, color:"white", price: 200, brand:"adidas", image:"https://cdn-images.farfetch-contents.com/15/16/43/62/15164362_26068068_1000.jpg", name: "yeezyboost", sex:"male")
stansmiths = Shoe.create(shoes_size: 9, color:"white", price: 65, brand:"adidas", image:"https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/69721f2e7c934d909168a80e00818569_9366/Stan_Smith_Shoes_White_M20324_01_standard.jpg", name:"Stan Smiths", sex:"unisex")
nmd_r1 = Shoe.create(shoes_size: 10.5, color:"white", price: 150, brand:"adidas", image:"https://assets.adidas.com/images/w_840,h_840,f_auto,q_auto:sensitive,fl_lossy/189b449050ef49b1aa68a8ba010163e6_9366/NMD_R1_Shoes_White_D96635_01_standard.jpg", name: "NMD_R1", sex:"male")
samba = Shoe.create(shoes_size: 10.5, color:"white", price: 75, brand:"adidas", image:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/9f1ef31bb9234043abb7abb100b20338_9366/Samba_Vegan_Shoes_White_FW2427_01_standard.jpg", name:"Sambas", sex:"unisex")

pumaRS = Shoe.create(shoes_size: 10, color:"multiple", price: 110, brand:"puma", image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/373308/01/sv01/fnd/PNA/fmt/png", name: "RS-x)", sex:"male")
suede = Shoe.create(shoes_size: 10, color:"red", price: 110, brand:"puma", image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/352634/75/sv01/fnd/PNA/fmt/png/Suede-Classic+-Sneakers", name:"Suede Classic"},sex:"male")
cali = Shoe.create(shoes_size: 10, color:"multiple", price: 110, brand:"puma", image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/380220/03/sv01/fnd/PNA/fmt/png/Cali-Star-Women's-Sneakers", name:"Cali Star", sex:"female")
rs_curve = Shoe.create(shoes_size: 10, color:"multiple", price: 110, brand:"puma", image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/381404/01/sv01/fnd/PNA/fmt/png/RS-Curve-Gold-Women's-Sneakers", name:"RS-Curve" sex:"female")
rs = Shoe.create(shoes_size: 10, color:"multiple", price: 110, brand:"puma", image:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/382123/01/sv01/fnd/PNA/fmt/png/RS-X-Hypnotic-Sneakers", name:"RS-X Hypnotic", sex:"unisex")





user1 = User.create(username:"Json")

# json = LikedShoe.create(shoe:, user:user1)
ultraboost = Shoe.create(shoes_size: 10, color:"white", price: 200, brand:"adidas", image:"https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/a03362c76f354df2a43fac210106fb50_9366/Ultraboost_4.0_DNA_Shoes_White_G55461_01_standard.jpg")

user1 = User.create(username:"Json")

json = LikedShoe.create(shoe:ultraboost, user:user1)


#////////////////nike//////////////////

roshes = Shoe.create(shoes_size: 10, color:"white", price: 200, brand:"nike", image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/riur8c6bz6wpakhlgwxl/roshe-one-mens-shoe-MkTmzjJv.jpg", sex:"unisex")

kyrie6 = Shoe.create(shoes_size: 10, color:"white", price: 100, brand:"nike", image:"https://media.finishline.com/i/finishline/CK5869_101_P1?$Main_gray$&bg=rgb(237,237,237)", sex:"male")

jordan1 = Shoe.create(shoes_size: 10, color:"white", price: 200, brand:"nike", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRNyIi0u8DL4OAnJ4RHJy1IDBo5cU3P_OUyA&usqp=CAU", sex:"unisex")

airmax = Shoe.create(shoes_size: 10, color:"white", price: 200, brand:"nike", image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/zwxes8uud05rkuei1mpt/air-max-90-mens-shoe-6n3vKB.jpg", sex:"unisex")

airForce = Shoe.create(shoes_size: 10, color:"white", price: 200, brand:"nike", image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/4f37fca8-6bce-43e7-ad07-f57ae3c13142/air-force-1-07-mens-shoe-5QFp5Z.jpg", sex:"unisex")

#///////////////////COVERSE///////////////////

classic_Low = Shoe.create(shoes_size: 10, color:"white", price: 200, brand:"converse", image:"https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwd4d59ab3/images/a_107/M7652_A_107X1.jpg?sw=964", name:"all Star", sex:"unisex")

classic_high = Shoe.create(shoes_size: 10, color:"white", price: 200, brand:"converse", image:"https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwdd05c312/images/a_107/M9160_A_107X1.jpg?sw=964", name:"all Star High", sex:"unisex")

runStar = Shoe.create(shoes_size: 10, color:"black", price: 200, brand:"converse", image:"https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwea34f93a/images/a_107/166800C_A_107X1.jpg?sw=964", name:"run Star Hike", sex:"unisex")

chuck70_low = Shoe.create(shoes_size: 10, color:"white", price: 200, brand:"converse", image:"https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwa4efce0f/images/a_107/162065C_A_107X1.jpg?sw=964", name:"chuck 70's low", sex:"unisex")

chuck70_high = Shoe.create(shoes_size: 10, color:"black", price: 200, brand:"converse", image:"https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dw88ddaf6e/images/a_107/162050C_A_107X1.jpg?sw=964", name:"chuck 70's high", sex:"unisex")