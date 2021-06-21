# ASSESSMENT 6: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating an API with a model called Animal that has_many Sightings, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer:

  Researched answer: Generate a migration to add to the Sightings model, foreign key on the Sightings model (belongs_to), foreign key would be called animal_id



2. Which RESTful routes must always be passed params? Why?

  Your answer:

  Researched answer: Delete, Update, Show - need to find one thing from the db



3. Name three rails generator commands. What is created by each?

  Your answer:

  Researched answer: resource - model, routes, controller, migration - template for changes to the db, model - model class, migration, scaffold - model, routes, controller, views, controllers - controller, view folder



4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

method="GET"    /students      index - get all the students      

method="GET"    /students/2    show - gets just one student, with an id of 2

method="GET"    /students/new  new - display a form

method="GET"    /students/edit/2    edit - form for editing the student with an id of 2

method="POST"   /students/     create - add a new student to the db     

method="PATCH"  /students/2    update - updating the info of the student with an id of 2

method="DELETE" /students/2    destroy - delete the student with the id of 2 



5. As a developer, you want to make an application that will help you manage your to do list. To get started, you want to create the API. Create 10 user stories that will help you get your application started.
