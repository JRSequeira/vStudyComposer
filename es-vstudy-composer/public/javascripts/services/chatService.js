/**
 Aveiro University
 MIECT - Services Engineering

 @author: José Sequeira (64645)

 Service Composition for vStudy Application
 */

/**
 * vStudyApp Authentication service definition
 */
app.service('chatS', ['$http', function($http){
	
	this.currentUser = '';
	
    return{
		setUser: function(username){
			this.currentUser = username;	
		},
		getUser: function(cb){
			cb(this.currentUser);
		}
    }
}]);