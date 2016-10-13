# linggle-django

#### Install PostgreSQL first, using Postgres.app on OS X is recommended.
* Option1: ```brew cask install postgres```
* Option2: Download it from http://postgresapp.com

###### Command in psql
```
CREATE DATABASE linggle_local;
CREATE USER linggle WITH PASSWORD 'lingglepg';
ALTER ROLE linggle SET client_encoding TO 'utf8';
ALTER ROLE linggle SET default_transaction_isolation TO 'read committed';
ALTER ROLE linggle SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE linggle_local TO linggle;
\q
```

#### python package requirements
```pip install -r requirements/local.txt```


#### Have fun
```
/linggle-django/linggle > python manage.py migrate
/linggle-django/linggle > python manage.py runserver
/linggle-django/linggle > python manage.py runserver_plus
/linggle-django/linggle > python manage.py shell
/linggle-django/linggle > python manage.py shell_plus
```
> runserver_plus & shell_plus is powered by django-extensions http://django-extensions.readthedocs.org/en/latest/

#### Trouble shooting

- Occuring error when installing python package (for mac):

###### Error message
```
Error: pg_config executable not found.

    Please add the directory containing pg_config to the PATH
    or specify the full executable path with the option:

        python setup.py build_ext --pg-config /path/to/pg_config build ...

    or with the pg_config option in 'setup.cfg'.
```
Just add Postgres.app bin path to `$PATH` variable:

 `>  export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/<version>/bin`

 (Check out your Postgres.app version number first, and replace `<version>` with the version number.)

- Occuring `ImproperlyConfigured: No Facebook app configured: please add a SocialApp using the Django admin` when running server:

You need to [create an admin user](https://djangogirlstaipei.gitbooks.io/django-girls-taipei-tutorial/content/django/admin.html) for diango app:
```
> python manage.py createsuperuser
```
