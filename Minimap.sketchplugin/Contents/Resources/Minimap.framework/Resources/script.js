var go = function(context) {
  try { Minimap.go(context); }
  catch(e) {
      if(Mocha.sharedRuntime().loadFrameworkWithName_inDirectory('Minimap', NSBundle.bundleWithURL(context.plugin.url()).resourceURL().path())) {
          Minimap.go(context);
      }
  }
}