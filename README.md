## Cool Products
Rails & React app that can be seeded with a CSV. To run the app:

1. Bundle to install dependencies
2. Migrate database with `rails db:migrate`
3. Run seed importer task with `rake import:csv\['filepath'\]`
4. Start Rails app with `rails s -p 3001`
5. Start React app with `npm start -p 3000` and visit http://localhost:3000

To improve performance when reading the CSV, Cool Products uses the gem [smarter_csv](https://github.com/tilo/smarter_csv).

To improve performance when inserting the record, Cool Products brings in the gem [activerecord-import](https://github.com/zdennis/activerecord-import). Instead of processing an insert for each new row in the CSV, I've used activerecord-import's strategy of batch inserts- building an array of new db objects, then running just one insert for the batch. In testing this app, I found that activerecord-import inserted the new seeds almost 2.5x faster than built in Active Record methods.

One downside to using activerecord-import with SQLite3 is that batch validation is not supported. For the purposes of seeding, I've checked that products and advertiser names are not duplicated before creating new Product and advertiser objects to pass to the import batch.

Tests can be run with `rake test`.

