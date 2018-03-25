## Cool Products
Rails & React app that can be seeded with a CSV. To run the app:

1. Bundle to install dependencies
2. Run seed importer task with `rake import:csv\['filepath'\]`
3. Start Rails app with `rails s -p 3001`
4. Start React app with `npm start -p 3000`

To improve performance when reading the CSV, Cool Products uses the gem [smarter_csv](https://github.com/tilo/smarter_csv).

To improve performance when inserting the record, Cool Products brings in the gem [activerecord-import](https://github.com/zdennis/activerecord-import). Instead of processing an insert for each new row in the CSV, I've used activerecord-import's strategy of batch inserts- building an array of new db objects, then running just one insert for the batch. In testing this app, I found that activerecord-import inserted the new seeds almost 2.5x faster than built in Active Record methods.

One downside to using activerecord-import with SQLite3 is that batch validation is not supported. For the purposes of seeding, I've checked that products and advertiser names are not duplicated before creating new Product and advertiser objects to pass to the import batch.

Tests can be run with `rake test`.

## Full-stack Developer Assignment
**Frontend**

Create a single page application with either React, Angular/JS, Backbone, or Vue. The application will primarily consist of at least one custom built component. The component then renders the list as a table. Populate the table with the results of the API endpoint described below.

**Backend**

Using any server side language and any MVC framework/architecture, create a new backend service with two resources: products and their corresponding advertisers.
Using any relational database, you will setup a schema that includes the following attributes:

- Product name
- Product SKU
- associated advertiser id
- Advertiser name

The ID, name and SKU should be unique for each product. We have created a seed file for you to download, process and insert into your database via a script of your own creation. The file lives at https://s3.amazonaws.com/rm-rant-interviewing/products.tar.gz and should not be included in the repo. Your script will be submitted as part of the assignment and will be run by us to validate the homework. Also as part of this, we'd like you to describe an efficient approach to inserting the file. How would this approach scale?

Additional Instructions

- include tests

- run backend on post 3001 and front end on 3000