# Curate.io

![logo-image](https://camo.githubusercontent.com/0ece5c75b9d0b22afc3856ddafd133514835f1b2/68747470733a2f2f7265732e636c6f7564696e6172792e636f6d2f646978353273666e652f696d6167652f75706c6f61642f76313536353833323335312f4c4f474f2e706e67)
Visit: https://curate-io.herokuapp.com/

Curate is a "pure" customer engagement tool created to strengthen a user's relationship with its customers thorugh a customer's diary. Users have the ability to build full-fledged profile for their customers (or import their profiles from HubSpot), and keep track of their interactions via diary logs.

Curate.io was built **discourage ineffective first contacts such as template sales emails, scripted phone calls, and cold LinkedIn messages, and encourage more authentic relations!**

[![Codeship Status for pablo-desperados/Curate](https://app.codeship.com/projects/651b83a0-8f76-0137-ff27-3e651be3cb93/status?branch=master)](https://app.codeship.com/projects/355925)


# Getting started

After you fork, dowload, or clone the repo, please execute the following commands to get the application to run locally:

```
bundle install
yarn install
rake db:create
rake db:migrate
rake db:seed
```
Finally, run the following commands on separate tabs:

```
rails server
yarn start
```
To access the application locally from your browser, visit:
```
localhost:3000/mainpage
```
***

# Usage
After signing up/signing in, click on the "New Customer" button located on the navbar or the dashboard and createyour first customer tile.



