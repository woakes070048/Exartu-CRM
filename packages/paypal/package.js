Package.describe({
    summary: 'paypal integration'
});

//Npm.depends({
//});
var both = ["client", "server"];

Package.on_use(function(api){
    api.use([
        "iron-router",
    ], 'server');

//    api.use([
//        'deps',
//    ], 'client');

    api.add_files('listener.js', ['server']);
//    api.add_files('util.js', ['server']);
//    api.add_files('validator.js', ['server']);
//    api.add_files('updater.js', ['server']);
//    api.add_files('core.js', both);
//    api.add_files('constructor.js', ['server']);
//    api.add_files('basicFieldTypesDefinition.js', both);
//    api.add_files('client.js', ['client']);
//    api.export("dType")
});

Package.on_test(function(api){
//    api.use(['dType', 'tinytest', 'test-helpers']);
//    api.add_files('test/test.js', ['server']);
//    api.add_files('test/fieldTest.js', ['server']);
//    api.add_files('test/serviceTest.js', ['server']);
})


/////////////////////////////////////////////////////////////
//var col = Meteor.isClient ? self : self._collection;
//if (!col._dtypeId){
//    if (!col._name)
//        col._dtypeId='localCollection' + _.keys(__direct).length;
//    else{
//        col._dtypeId=col._name
//    }
//}
//
//if (!__direct[col._dtypeId]){
//    __direct[col._dtypeId]={};
//}
//
//__direct[col._dtypeId][method]=col[method];
//__direct[col._dtypeId][method]=_.bind(__direct[col._dtypeId][method], col);
////////////////////////////////////////////////////////////