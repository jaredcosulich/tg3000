// For any third party dependencies, like jQuery, place them in the lib folder.
// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
  baseUrl: 'scripts/lib',
  paths: {
    app: '../app',
    text: 'text',
    ace: 'http://cdnjs.cloudflare.com/ajax/libs/ace/1.1.3/ace'
  }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);