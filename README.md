## Secret Family Recipes Back End

The Secret Family Recipes app allows users to store the most sacred recipes of there family.  It allows them to protect the recipes that have been handed down through generations.

In this repo you will find the backend portion of the application.

# Docs
https://documenter.getpostman.com/view/8921227/SVn2Muzi

Contributors:
Desiree Q Morris - https://github.com/desiquinn
Kevin Lopez - https://github.com/kevlpz

## Endpoints

# Base URL
https://secretfamilyrecipe.herokuapp.com

# POST /api/auth/register

* Add/Register New User

* Body (Accepts)
    {
        "username": "testuser",
        "password": "testpassword"
    }

* Returns (User Object and Token)
    {
        "user": {
            "id": 5,
            "username": "testuser2",
            "password": "$2a$08$eJOjmSlaD61/Z73DHwCm4ezos9jWv41nq.IMuq7l8phc3VVHymDd6"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJ"
    }

# POST /api/auth/login

* Login User

* Body (Accepts)
    {
        "username": "testuser",
        "password": "testpassword"
    }

* Returns (User Object and Token)
    {
        "user": {
            "id": 4,
            "username": "testuser",
            "password": "$2a$08$LSDk50SsYmUJ2bh49fSUG./LPrLY7tW9w/YH9QS9FfmYDTg7.1J02"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJ"
    }

# GET /api/users/:user_id/recipes

* Get all recipes belonging to user

* Accepts
    user_id:	User's ID

* Returns (Array of Recipe Objects)
    [
        {
            "id": 3,
            "title": "Sweet Corn Bread",
            "source": "Granny",
            "instructions": "Mix ingredients in a large bowl, greese pan, turn oven to 350, poor mixture into pan, keep in oven for 30mins",
            "user_id": "1",
            "category": "Side Dish",
            "ingredients": "1cup cornmeal, 1/4cup milk, 1 large egg, 1/2cup sugar, 1stick butter"
        }
    ]

# GET /api/users/recipes/:id

* Get one recipe with specified id

* Accepts
    id:     Recipe's ID

* Returns (One Recipe Object)
    {
        "id": 3,
        "title": "Sweet Corn Bread",
        "source": "Granny",
        "instructions": "Mix ingredients in a large bowl, greese pan, turn oven to 350, poor mixture into pan, keep in oven for 30mins",
        "user_id": "1",
        "category": "Side Dish",
        "ingredients": "1cup cornmeal, 1/4cup milk, 1 large egg, 1/2cup sugar, 1stick butter"
    }


# POST /api/users/:user_id/recipes

* Add new recipe to specified user

* Accepts
    user_id:	User's ID
    Body
        {
            "title": "Corn Bread",
            "source": "Granny",
            "category": "Side Dish",
            "ingredients": "1cup cornmeal, 1/4cup milk, 1 large egg, 1/2cup sugar, 1stick butter",
            "instructions": "Mix ingredients in a large bowl, greese pan, turn oven to 350, poor mixture into pan, keep in oven for 30mins"
        }

* Returns (New Recipe Object)
    {
        "id": 5,
        "title": "Corn Bread",
        "source": "Granny",
        "instructions": "Mix ingredients in a large bowl, greese pan, turn oven to 350, poor mixture into pan, keep in oven for 30mins",
        "user_id": "2",
        "category": "Side Dish",
        "ingredients": "1cup cornmeal, 1/4cup milk, 1 large egg, 1/2cup sugar, 1stick butter"
    }

# DELETE /api/users/recipes/:id

* Delete recipe of specified id

* Accepts
    id: 	Recipe's ID

# PUT /api/users/recipes/:id

* Edit recipe of specified id

* Accepts
    id: 	Recipe's ID
    Body
        {
            "title": "Sweet Corn Bread",
            "source": "Granny",
            "category": "Side Dish",
            "ingredients": "1cup cornmeal, 1/4cup milk, 1 large egg, 1/2cup sugar, 1stick butter",
            "instructions": "Mix ingredients in a large bowl, greese pan, turn oven to 350, poor mixture into pan, keep in oven for 30mins"
        }

* Returns (Updated Recipe Object)
    {
        "id": 5,
        "title": "Sweet Corn Bread",
        "source": "Granny",
        "instructions": "Mix ingredients in a large bowl, greese pan, turn oven to 350, poor mixture into pan, keep in oven for 30mins",
        "user_id": "2",
        "category": "Side Dish",
        "ingredients": "1cup cornmeal, 1/4cup milk, 1 large egg, 1/2cup sugar, 1stick butter"
    }