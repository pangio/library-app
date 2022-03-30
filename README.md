# library-app

project created with vue-cli
## Project setup
first install node v16
if using nvm, run `nvm i 16` and `nvm use 16`

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# Code structure and notes:
- `Search.vue` remains visible allowing users to search for authors. Whenever the search gets focus, existing results are cleaned up.
- `AuthorsResults.vue` shows results for a given input search.
- `WorksResults.vue` shows work for a given author.
- `BookDetails.vue` shows book's details.
- `store` contains vuex logic, state and mutations for SPA state mnagement.
- `router`, *pending* to use views/pages and vue-router to map components to routes and keep url updated.
- `BookDetails.vue` *pending* to call Cover Api to render the pics or thumbnails.
- `Jest` *pending* to install and create unit tests.


# Screenshots

## search
![author search 1](https://github.com/pangio/library-app/blob/master/screenshots/Screen%20Shot%202022-03-30%20at%2000.00.35.png)
![author search 2](https://github.com/pangio/library-app/blob/master/screenshots/Screen%20Shot%202022-03-30%20at%2000.01.24.png)

## work list
![work list](https://github.com/pangio/library-app/blob/master/screenshots/Screen%20Shot%202022-03-30%20at%2000.01.41.png)

## work/book details
![eg book details 1](https://github.com/pangio/library-app/blob/master/screenshots/Screen%20Shot%202022-03-30%20at%2000.11.02.png)
![eg book details 2](https://github.com/pangio/library-app/blob/master/screenshots/Screen%20Shot%202022-03-30%20at%2000.11.19.png)
