class LikedShoeSerializer


    def initialize(liked_shoes)
        @liked_shoes = liked_shoes
    end 

    def to_serialized_json
       options = {
           include: {
               shoe: {
                except: [:updated_at, :created_at]

               },
               user: {
                   only: [:username]
               }
           },
           except: [:updated_at, :created_at]
       }
       @liked_shoes.to_json(options)
    end 


end 