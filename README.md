# Crappy Wordle Discord Bot

## Server Dependencies

- Database: Either SQLite or Postgres
- Node: v16.14
- Python2 (For SQLite driver)

## Getting Started

If you want to start the project, make sure the environment that the application will be running in has the necessary
dependencies installed. Then, run:

```sh
cp .env.example .env
```

And fill in the environment variables in `.env`.

#### Environment Variables

```dotenv
ENV= #Not really used in the application just yet
DISCORD_TOKEN= #This is what discord uses to authenticate your bot 
DISCORD_BOT_SNOWFLAKE= #This is your Bot's Application ID (They call it snowflake in the docs)
DISCORD_BOT_USERNAME= #Used by the application to detect when your bot has been mentioned 
DISCORD_BOT_DISCRIMINATOR= #Used by the application to detect when your bot has been mentioned
DB_DRIVER= #Supported databases: sqlite or postgres
DB_DATABASE= #The name of the database, or the name of the file, as per your installation
DB_HOST= #(postgres-only)
DB_PORT= #(postgres-only)
DB_USERNAME= #(postgres-only)
DB_PASSWORD= #(postgres-only)

```

---

### Database Migrations

Currently, the application does not have a way to automatically migrate your database. You will have to do this
manually.

---

#### Postgres Migration Script

Note: The Migration scripts do not set up the Postgres database or user for you. You will have to create this yourself.

```postgresql
CREATE TABLE games
(
    id       UUID    NOT NULL,
    word     VARCHAR NOT NULL,
    progress VARCHAR NOT NULL,
    PRIMARY KEY (id)
);
```

---

#### SQLite Migration Script

```sqlite
CREATE TABLE games
(
    id       TEXT NOT NULL PRIMARY KEY,
    word     TEXT NOT NULL,
    progress TEXT NOT NULL
)
```

#### Using SQLite database driver

If you're using SQLite, you only need to fill in these environment variables:

```
DB_DRIVER=sqlite
DB_DATABASE=FILENAME.sqlite
```

`DB_DATABASE` expects only the filename instead of a fully qualified path, and will search for the filename
within `database/`
