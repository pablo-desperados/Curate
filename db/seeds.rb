#Create default users
user_0_photo = open("https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")
user0 = User.create!(email: "A.wight@harvard.edu", password: "SecurePassword123123", first_name: "Andrea", last_name: "Wight", profile_photo: user_0_photo )
user1 = User.create!(email: "pblmjc@gmail.com", password: "SecurePassword123123", first_name: "Robert", last_name: "McDonald")
user_2_photo = open("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80")
user2 = User.create!(email: "pbl.mjc@gmail.com", password: "SecurePassword123123", first_name: "Daniel", last_name: "Steven", profile_photo: user_2_photo )

#Create default customers

customer1 = Customer.create!(first_name: "Tom", last_name: "Hills", email:"t.hills987@email.com", lifecycle_status: "Champion", phone_number: "8572651439", title: "Founder", company_name: "Hills Equity", location: "Boston, MA")

customer2_photo = open("https://images.unsplash.com/photo-1551854590-dc9c6265b1b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80")
customer2 = Customer.create!(first_name: "Lisa", last_name: "Milano", email:"milano.2020@email.com", lifecycle_status: "New lead", phone_number: "9994573928", title: "VP of sales", company_name: "Bank of America", location: "Washington DC", profile_picture: customer2_photo)

customer3_photo = open("https://images.unsplash.com/photo-1535419218759-c71f0a6015b3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80")
customer3 = Customer.create!(first_name: "White", last_name: "Williams", email:"williamstheman@penn.edu.com", lifecycle_status: "Disqualified", phone_number: "8442348573", title: "Digital marketing coordinator", company_name: "Draco Industries", location: "Vancouver, ON", profile_picture: customer3_photo)

customer4_photo= open("https://images.unsplash.com/photo-1530268729831-4b0b9e170218?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")
customer4 =Customer.create!(first_name: "Milliard", last_name: "O'Brian", email:"jack.milliard@gmail.com", lifecycle_status: "Contacted", phone_number: "7098532984", title: "Community advisor", company_name: "Facebook", location: "Los Angeles, CA")

##Create relationship
Relation.create!(user_id: user0.id, customer_id: customer1.id)
Relation.create!(user_id: user0.id, customer_id: customer2.id)
Relation.create!(user_id: user1.id, customer_id: customer2.id)
Relation.create!(user_id: user2.id, customer_id: customer3.id)
Relation.create!(user_id: user2.id, customer_id: customer4.id)

#Create diary for customers
Diary.create!(customer_id: customer1.id, title: "Met Tom for the first time!", body:"We talked about possibly bringing his company as a client. He said he wanted a better deal than other partners", favorite: false , user_id: user0.id)
Diary.create!(customer_id: customer1.id, title: "Found something interesting", body:"We actually worked at the smae company years ago, this might be somethign to bring up in our next meeting", favorite: true, user_id: user0.id)
Diary.create!(customer_id: customer1.id, title: "Friends on linkedin", body:"In our last meeting he recommended me to contact a couple of his friend on linkedin. I'll take this into consideration", favorite: false, user_id: user0.id)

Diary.create!(customer_id: customer2.id, title: "First contact", body:"I need to reach out to her in a month from now. We might get her company to buy our products", favorite: false, user_id: user0.id)
Diary.create!(customer_id: customer2.id, title: "Useful information", body:"Her company actually produces something completely different from what we initially thought. Need to do more research", favorite: false, user_id: user1.id)
Diary.create!(customer_id: customer2.id, title: "Might need to disqualify her", body:"We need to rethink this contact", favorite: false, user_id: user1.id)

Diary.create!(customer_id: customer4.id, title: "sent initiali contact", body:"He works for an awesome company. I sent an initial greeting email", favorite: true, user_id: user2.id)
